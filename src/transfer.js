

// peer.on('open', function(id) {
//     console.log('My peer ID is: ' + id)

//     let hash
//     let code
// })

// peer.on('error', err => {
//     console.error(err)
// })

const React = require('react')
const { render } = require('react-dom')

const Firebase = require('./Firebase')

const peer = new Peer(`songriffer-transfer-${Date.now()}-${Math.floor(Math.random() * 1000)}`)

class AuthForm extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onEmailChange = ev => {
        this.setState({ email: ev.target.value })
    }

    onPasswordChange = ev => {
        this.setState({ password: ev.target.value })
    }

    onSubmit = ev => {
        ev.preventDefault()

        Firebase.signInWithEmailPassword(this.state.email, this.state.password)
    }

    render() {
        const {
            email,
            password,
        } = this.state

        return (
            <form onSubmit={ this.onSubmit }>
                <div>
                    <input type="email" placeholder="Email" onChange={ this.onEmailChange } value={ email } />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={ this.onPasswordChange } value={ password } />
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        )
    }
}

// quick app for now, will clean and
// structure better later
class App extends React.Component {
    state = {
        appReady: false,
        code: '',
        connected: false,
        files: [],
        isAuthenticated: false,
        user: null,
    }

    conn = null
    fileInput = React.createRef()

    onAuthChange = user => {
        if (user) {
            this.getEmailHash(user.email).then(emailHash => {
                this.setState({
                    appReady: true,
                    emailHash,
                    isAuthenticated: true,
                    user,
                })
            })
        }
        else {
            this.setState({
                appReady: true,
                isAuthenticated: false,
                user: null,
            })
        }
    }

    signOut = () => {
        Firebase.signOut()
    }

    onCodeChange = ev => {
        const code = ev.target.value

        if (code !== this.state.code) {
            this.setState({ code }, () => {
                if (this.state.code && this.state.code.length === 4) {
                    this.connectClient()
                }
            })
        }
    }

    getEmailHash(email) {
        return new Promise(resolve => {
            const encoder = new TextEncoder()
            const data = encoder.encode(email)
            crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
                const hashArray = Array.from(new Uint8Array(hashBuffer))
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

                resolve(hashHex)
            })
        })
    }

    connectClient() {
        const { emailHash, code } = this.state

        console.log(`Connect to SongRiffer-${emailHash}-${code}`)

        this.conn = peer.connect(`SongRiffer-${emailHash}-${code}`)
        this.conn.on('open', () => {
            this.conn.send({
                type: 'READY_TO_SEND',
                hash: emailHash,
            })
            this.setState({
                connected: true,
            })
        })
    }

    onFileChange = ev => {
        const validFiles = Array.from(this.fileInput.current.files).filter(file => {
            if (!file.type.includes('audio')) {
                alert(`Cannot transfer file ${file.name} - not an audio file`)
                return false
            }

            return true
        })

        if (validFiles.length) {
            this.conn.send({
                type: 'FILE_LIST',
                files: validFiles.map(f => f.name),
            })
        }

        this.setState({
            files: validFiles,
        })
        this.sendFile(validFiles, 0)
    }

    sendFile = (files, index) => {
        const file = files[index]

        if (!file) {
            return
        }

        console.log('#### start sending ', file.name)

        this.conn.send({
            type: 'FILE_TRANSFER_START',
            fileName: file.name,
        })

        const reader  = new FileReader()

        reader.addEventListener('load', () => {
            console.log(reader.result)
            console.log('##### send data')

            console.log('## sending file ', file.name)
            this.conn.send({
                type: 'FILE_TRANSFER',
                fileName: file.name,
                data: reader.result,
                fileType: file.type,
            })

            console.log('## file', file.name, 'transfered')
            if (files[index + 1]) {
                this.sendFile(files, index + 1)
            }
        }, false)

        reader.readAsArrayBuffer(file)
    }

    componentDidMount() {
        Firebase.onAuthChange(this.onAuthChange)
    }

    render() {
        const {
            appReady,
            code,
            connected,
            files,
            isAuthenticated,
        } = this.state

        if (!appReady) {
            return <div>loading...</div>
        }

        if (!isAuthenticated) {
            return <AuthForm />
        }

        return (
            <div>
                {
                    connected ? (
                        <div>
                            <div>Select the files to transfer:</div>
                            {
                                files.length ? (
                                    <div>
                                        {
                                            files.map(file => (
                                                <div key={ file.name }>{ file.name }</div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <input type="file" multiple="multiple" onChange={ this.onFileChange } ref={ this.fileInput } />
                                )
                            }
                        </div>
                    ) : (
                        <div>
                            <div>Enter your code from the SongRiffer app to start transfering files:</div>
                            <input type="text" onChange={ this.onCodeChange } maxLength={ 4 } value={ code } />
                        </div>
                    )
                }
                <button onClick={ this.signOut }>Sign out</button>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
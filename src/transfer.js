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

const AUTH_ERRORS = {
    'auth/user-not-found': 'We could not find your account, please check your information or create a new account.',
    'auth/wrong-password': 'Invalid password.',
}

class AuthForm extends React.Component {
    state = {
        confirmPassword: '',
        confirmPasswordError: false,
        email: '',
        error: null,
        formType: 'sign-in',
        password: '',
        pending: false,
    }

    onEmailChange = ev => {
        this.setState({
            confirmPasswordError: false,
            email: ev.target.value,
            error: null,
        })
    }

    onPasswordChange = ev => {
        this.setState({
            confirmPasswordError: false,
            error: null,
            password: ev.target.value,
        })
    }

    onConfirmPasswordChange = ev => {
        this.setState({
            confirmPasswordError: false,
            error: null,
            confirmPassword: ev.target.value,
        })
    }

    onSubmit = ev => {
        ev.preventDefault()
        this.setState({ pending: true })

        if (this.state.formType === 'sign-in') {
            Firebase.signInWithEmailPassword(this.state.email, this.state.password)
                .catch(error => {
                    this.setState({ error })
                })
        }
        else {
            if (this.state.password !== this.state.confirmPassword) {
                this.setState({ confirmPasswordError: true })
                return
            }

            Firebase.signUpWithEmailPassword(this.state.email, this.state.password)
                .catch(error => {
                    this.setState({ error })
                })
        }
    }

    switchForm = () => {
        this.setState({ formType: this.state.formType === 'sign-in' ? 'sign-up' : 'sign-in' })
    }

    render() {
        const {
            confirmPassword,
            confirmPasswordError,
            email,
            error,
            formType,
            password,
            pending,
        } = this.state

        return (
            <form className="transfer-auth" onSubmit={ this.onSubmit }>
                <div className="auth-title">
                    Please login or create an account to use start transfering files to your SongRiffer app.
                </div>
                <div>
                    <input type="email" placeholder="Email" onChange={ this.onEmailChange } value={ email } required />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={ this.onPasswordChange } value={ password } required />
                </div>
                {
                    formType === 'sign-up' ? (
                        <div>
                            <input type="password" placeholder="Confirm Password" onChange={ this.onConfirmPasswordChange } value={ confirmPassword } required />
                            {
                                confirmPasswordError ? (
                                    <div className="auth-error">Your password and your confirmation password do not match.</div>
                                ) : null
                            }
                        </div>
                    ) : null
                }
                {
                    error ? (
                        <div className="auth-error">
                            { AUTH_ERRORS[error.code] ? AUTH_ERRORS[error.code] : 'An error occured, please try again.' }
                        </div>
                    ) : null
                }
                <div>
                    <button>{ formType === 'sign-in' ? 'Log in' : 'Create an account' }</button>
                </div>
                <div className="form-type-switch" onClick={ this.switchForm }>
                    {
                        formType === 'sign-in' ? 'Create an account' : 'Log in with an existing account'
                    }
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
            trackEvent('auth', {
                'event_category': 'auth',
                'event_label': 'sign-in',
            })
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
        trackEvent('auth', {
            'event_category': 'auth',
            'event_label': 'sign-out',
        })
        Firebase.signOut()
    }

    onCodeChange = ev => {
        const code = ev.target.value.toUpperCase()

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
            trackEvent('transfer', {
                'event_category': 'transfer',
                'event_label': 'connected',
            })

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
            trackEvent('transfer', {
                'event_category': 'transfer',
                'event_label': 'start-transfer',
            })

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
            return <div>Loading...</div>
        }

        if (!isAuthenticated) {
            return <AuthForm />
        }

        return (
            <div>
                {
                    connected ? (
                        <div>
                            {
                                files.length ? (
                                    <div className="transfer-file-list">
                                        <div>Transfering files:</div>
                                        {
                                            files.map(file => (
                                                <div className="transfer-file" key={ file.name }>{ file.name }</div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        <div>Select the files to transfer</div>
                                        <label className="files-input-label">
                                            Select files
                                            <input className="files-input" type="file" multiple="multiple" onChange={ this.onFileChange } ref={ this.fileInput } />
                                        </label>
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div className="transfer-file-wrapper">
                            <div className="code-input-text">Enter your code from the SongRiffer app to start transfering files:</div>
                            <div className="code-input-wrapper">
                                <input
                                    className="code-input"
                                    type="text"
                                    onChange={ this.onCodeChange }
                                    maxLength={ 4 }
                                    value={ code }
                                    autoFocus
                                />
                            </div>
                        </div>
                    )
                }
                <div className="log-out-wrapper">
                    <button className="secondary-button" onClick={ this.signOut }>Log out</button>
                </div>
            </div>
        )
    }
}

const Header = () =>
    <div className="transfer-header">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="logo transfer-logo">
          <use xlinkHref="#e"/>
        </svg>
    </div>

const AppWrapper = () =>
    <div className="transfer-wrapper">
        <Header />
        <App />
    </div>

render(<AppWrapper />, document.querySelector('#root'))

import React from 'react'
import { render } from 'react-dom'
import FacebookLogin from 'react-facebook-login'

const { Header } = require('./Header')

const APP_ID = '1100238770337128'

const deeplinkTypes = {
    LOGIN_FACEBOOK: 'LOGIN_FACEBOOK',
}

class AppLogin extends React.Component {
    state = {
        authenticated: false,
    }

    responseFacebook = response => {
        console.log(response);
        this.setState({
            authenticated: true,
            accessToken: response.accessToken,
        })
    }

    renderSuccess() {
        const { accessToken } = this.state

        const deeplink = {
            type: deeplinkTypes.LOGIN_FACEBOOK,
            params: {
                token: accessToken,
            },
        }

        const appLink = `songriffer://songriffer.com?deeplink=${encodeURIComponent(JSON.stringify(deeplink))}`

        return (
            <div className="app-login-success">
                <div className="app-login-title">Logged in! Please click on the button to login in your SongRiffer app</div>
                <a className="app-link" href={ appLink }>Click here to login in your app</a>
            </div>
        )
    }

    render() {
        const { authenticated } = this.state

        return (
            <div className="transfer-wrapper">
                <Header />
                {
                    authenticated ? this.renderSuccess() : (
                        <>
                            <div className="app-login-title">Use the button below to login with facebook in your SongRiffer app:</div>
                            <FacebookLogin
                                appId={ APP_ID }
                                fields="name,email"
                                callback={ this.responseFacebook } />
                        </>
                    )
                }
            </div>
        )
    }
}

render(<AppLogin />, document.querySelector('#root'))

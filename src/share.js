const React = require('react')
const { render } = require('react-dom')

const Firebase = require('./Firebase')

const pad = x => `${x}`.length > 1 ? `${x}` : `0${x}`

export const formatDuration = duration => {
    const rawHours = Math.floor(duration / 3600)
    const rawMinutes = Math.floor(duration / 60) % 60
    const rawSeconds = duration % 60

    const hours = pad(rawHours)
    const minutes = pad(rawMinutes)
    const seconds = pad(rawSeconds)

    return `${rawHours ? `${hours}:` : ''}${minutes}:${seconds}`
}

const Loader = ({ size = 50 }) =>
    <svg
        className="share-loader"
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#8086FF"
            strokeWidth="3"
            r="29"
            strokeDasharray="136.659280431156 47.553093477052"
            transform="rotate(194.885 50 50)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1.1235955056179776s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            />
        </circle>
    </svg>

class App extends React.Component {
    state = {
        currentTime: 0,
        data: {},
        error: null,
        loading: true,
        playing: false,
    }

    player = React.createRef()

    getFileIds = () => {
        const { search } = window.location

        const params = search.replace('?', '').split('&').reduce((acc, param) => {
            const chunks = param.split('=')
            acc[chunks[0]] = chunks[1]

            return acc
        }, {})

        if (!params.s) {
            return {
                uid: '',
                publicId: '',
            }
        }

        const [ uid, publicId ] = params.s.split('_')

        return {
            uid,
            publicId,
        }
    }

    loadFile = () => {
        const { uid, publicId } = this.getFileIds()

        if (!uid.length || !publicId.length) {
            this.setState({
                error: 'Oops... It seems the link is broken...'
            })
        }

        Firebase.getSharedFile(uid, publicId)
            .then(({ data }) => {
                if (data.error) {
                    this.setState({ error: data.error })
                }

                this.setState({
                    data,
                    loading: false,
                }, () => {
                    try {
                        this.setMediaSession()
                    }
                    catch(e) {}
                })
            })
            .catch(e => {
                console.error(e)
            })
    }

    setMediaSession = () => {
        const { data } = this.state

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: data.name,
                artist: 'SongRiffer',
                album: 'Shared with SongRiffer',
                artwork: [
                    { src: 'https://songriffer.com/icon_128x128.png', sizes: '128x128', type: 'image/png' },
                    { src: 'https://songriffer.com/icon_256x256.png', sizes: '256x256', type: 'image/png' },
                    { src: 'https://songriffer.com/icon_512x512.png', sizes: '512x512', type: 'image/png' },
                ]
            });

            navigator.mediaSession.setActionHandler('play', this.play);
            navigator.mediaSession.setActionHandler('pause', this.pause);
            // navigator.mediaSession.setActionHandler('seekbackward', function() {});
            // navigator.mediaSession.setActionHandler('seekforward', function() {});
            // navigator.mediaSession.setActionHandler('previoustrack', function() {});
            // navigator.mediaSession.setActionHandler('nexttrack', function() {});
        }
    }

    togglePlay = () => {
        this.state.playing ? this.pause() : this.play()
    }

    play = () => {
        if (this.player.current) {
            this.player.current.play()
            this.setState({ playing: true })
            this.attachEvent()
        }
    }

    pause = () => {
        if (this.player.current) {
            this.player.current.pause()
            this.setState({ playing: false })
        }
    }

    attachEvent() {
        if (this.eventsAttached || !this.player.current) {
            return
        }

        this.eventsAttached = true

        this.player.current.addEventListener('timeupdate', ev => {
            this.setState({ currentTime: parseInt(this.player.current.currentTime, 10) })
        })
    }

    componentDidMount() {
        this.loadFile()
    }

    render() {
        const { currentTime, data, error, loading, playing } = this.state

        let content = null

        if (loading) {
            content = <Loader />
        }
        else if (error) {
            content = (
                <div>Oops... It seems the file you're trying to access does not exist or has been removed :/</div>
            )
        }
        else {
            content = (
                <div className="shared-file">
                    <div className="share-title">{data.name}</div>
                    <div>{formatDuration(currentTime)} - {formatDuration(data.duration)}</div>
                    <button onClick={this.togglePlay}>
                        {playing ? 'Pause' : 'Play'}
                    </button>
                    <audio ref={this.player} src={data.url} />
                </div>
            )
        }

        return (
            <div className="share-wrapper">
                <div className="share-header">
                    <Header />
                    <div className="download-block share-download-block">
                        <div>Download SongRiffer:</div>
                        <div className="download-links">
                            <a className="download-link" href={ MAC_DOWNLOAD_URL } download id="download-mac" data-platform="mac" title="Download SongRiffer for Mac">Mac</a>
                            <a className="download-link" href={ WINDOWS_DOWNLOAD_URL } download id="download-windows" data-platform="windows" title="Download SongRiffer for Windows">Windows</a>
                        </div>
                    </div>
                </div>
                <div className="share-separator" />
                {content}
            </div>
        )
    }
}

const Header = () =>
    <div className="transfer-header">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="logo transfer-logo share-logo">
          <use xlinkHref="#e"/>
        </svg>
    </div>

render(<App />, document.querySelector('#root'))

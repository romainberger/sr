const React = require('react')
const { render } = require('react-dom')

const Firebase = require('./Firebase')

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
        data: {},
        loading: true,
        error: null,
    }

    getFileIds = () => {
        const { pathname } = window.location
        const chunks = pathname.split('/')

        const publicId = chunks.pop()
        const uid = chunks.pop()

        return {
            uid,
            publicId,
        }
    }

    loadFile = () => {
        const { uid, publicId } = this.getFileIds()

        Firebase.getSharedFile(uid, publicId)
            .then(({ data }) => {
                if (data.error) {
                    this.setState({ error: data.error })
                }

                this.setState({
                    data,
                    loading: false,
                })
            })
            .catch(e => {
                console.error(e)
            })
    }

    componentDidMount() {
        this.loadFile()
    }

    render() {
        const { data, error, loading } = this.state

        let content = null

        if (loading) {
            content = <Loader />
        }
        else if (error) {
            content = <div>Error: {error}</div>
        }
        else {
            content = (
                <>
                    <div className="share-title">{data.name}</div>
                    <audio src={data.url} controls />
                </>
            )
        }

        return (
            <div className="share-wrapper">
                {content}
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))

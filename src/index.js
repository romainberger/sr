require('./main.css')

const baseUrl = location.origin

const getElement = (selector, cb) => {
    const el = document.querySelector(selector)

    el && cb(el)
}

fetch(`${baseUrl}/update-mac.json?t=${+new Date()}`)
    .then(res => res.json())
    .then(data => {
        getElement('#version', el => {
            el.innerHTML = `version ${data.version} (beta)`
        })
        getElement('#download-mac', el => {
            el.href = data.url
        })
    })

fetch(`${baseUrl}/update-win.json?t=${+new Date()}`)
    .then(res => res.json())
    .then(data => {
        getElement('#download-windows', el => {
            el.href = data.url
        })
    })

getElement('.download-link', el => {
    el.addEventListener('click', ev => {
        const platform = ev.target.dataset.platform

        trackEvent('download', {
            'event_category': 'download',
            'event_label': platform,
        })
    })
})

getElement('.link', el => {
    el.addEventListener('click', ev => {
        const link = ev.target.dataset.link

        trackEvent('link', {
            'event_category': 'click',
            'event_label': link,
        })
    })
})

const video1 = document.querySelector('#video-feature-1')
const video3 = document.querySelector('#video-feature-3')
let video1Index = 0
let video3Index = 0

const feature1Videos = [
    'assets/feature-1-0.mp4',
    'assets/feature-1-1.mp4',
    'assets/feature-1-2.mp4',
]

const feature3Videos = [
    'assets/feature-3-0.mp4',
    'assets/feature-3-1.mp4',
]

if (video1 && video3) {
    video1.addEventListener('ended', () => {
        if (video1Index + 1 > feature1Videos.length - 1) {
            video1Index = 0
        }
        else {
            video1Index++
        }

        video1.src = feature1Videos[video1Index]
    })

    video3.addEventListener('ended', () => {
        if (video3Index + 1 > feature3Videos.length - 1) {
            video3Index = 0
        }
        else {
            video3Index++
        }

        video3.src = feature3Videos[video3Index]
    })
}

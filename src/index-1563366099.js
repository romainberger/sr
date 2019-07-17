window.dataLayer = window.dataLayer || []
function gtag() {
    dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'UA-142711477-1')

const baseUrl = 'http://songriffer.com'

fetch(`${baseUrl}/update-mac.json?t=${+new Date()}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('#version').innerHTML = `version ${data.version} (beta)`
        document.querySelector('#download-mac').href = data.url
    })

fetch(`${baseUrl}/update-win.json?t=${+new Date()}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('#download-windows').href = data.url
    })

document.querySelector('.download-link').addEventListener('click', ev => {
    const platform = ev.target.dataset.platform

    gtag('event', 'download', {
        'event_category': 'download',
        'event_label': platform,
    })
})

document.querySelector('.link').addEventListener('click', ev => {
    const link = ev.target.dataset.link

    gtag('event', 'link', {
        'event_category': 'click',
        'event_label': link,
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

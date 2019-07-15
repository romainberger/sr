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

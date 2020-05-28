const icons = document.querySelectorAll('.js-icon')

icons.forEach(icon => {
    const glyph = String.fromCharCode(icon.dataset.icon)
    icon.innerHTML = glyph
})

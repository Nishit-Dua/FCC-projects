const buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        const audio = document.querySelector(`audio[data-key="${button.dataset.sound}"]`)
        audio.currentTime = 0
        audio.play()
    })
})
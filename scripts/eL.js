const inputField = document.querySelector('#message')
const copy1 = document.querySelector('#copy1')
const copy2 = document.querySelector('#copy2')

inputField.addEventListener('keyup', event => {
    copy1.textContent = event.target.value
    copy2.textContent = event.target.value
})
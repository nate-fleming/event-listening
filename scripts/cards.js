const createButton = document.querySelector('#create-btn')
const cardText = document.querySelector('#input-feild')
const container = document.querySelector('.container')


let cardIndex = 0

remove = (num) => {
    let card = document.querySelector(`#card--${num}`)
    container.removeChild(card)
}

createCard = () => {
    let div = document.createElement('div')
    let p = document.createElement('p')
    let deleteButton = document.createElement('button')

    div.className = 'card'
    div.id = `card--${cardIndex += 1}`
    p.textContent = cardText.value
    deleteButton.className = 'delete-btn'
    deleteButton.id = `delete--${cardIndex}`
    deleteButton.textContent = 'Delete this card'

    deleteButton.addEventListener('click', (e) => {
        num = e.target.id.split('--').pop()
        remove(num)
    })

    container.appendChild(div)
    div.appendChild(p)
    div.appendChild(deleteButton)

}

createButton.addEventListener('click', () => {
    createCard()
})




const flightButton = document.querySelector('#activate-flight')
const mindReadingButton = document.querySelector('#activate-mindreading')
const xrayButton = document.querySelector('#activate-xray')
const flightSection = document.querySelector('#flight')
const mindReadingSection = document.querySelector('#mindreading')
const xraySection = document.querySelector('#xray')
const allSections = document.querySelectorAll('.power')
const enableAllPowers = document.querySelector('#activate-all')
const disableAllPowers = document.querySelector('#deactivate-all')
const activateButtons = document.querySelector('.activate-buttons')
const allButtons = [
    flightButton,
    mindReadingButton,
    xrayButton
]

// activateButtons.addEventListener('click', (e) => {
//     if(e.target.id === 'activate-flight') {
//         let power = e.target.id.split('-').pop()
//         changeClass(flightSection)
//     } if (e.target.id === 'activate-mindreading') {
//         let power = e.target.id.split('-').pop()
//         changeClass(mindReadingSection)
//     } if (e.target.id === 'activate-xray') {
//         let power = e.target.id.split('-').pop()
//         changeClass(xraySection)
//     }
// })

changeClass = (power) => {
    let section = document.querySelector(`#${power}`)
    section.classList.remove('disabled')
    section.classList.add('enabled')
}


allButtons.forEach( button => {
    button.addEventListener('click', (e) => {
        let power = e.target.id.split('-').pop()
        changeClass(power)
    })
})


// allButtons.forEach(e => {
//     let power = e.target.id.split('-').pop()
//     changeClass(power)
// })


// flightButton.addEventListener('click', () => {
//     changeClass(flightSection)
// })

// mindReadingButton.addEventListener('click', () => {
//     changeClass(mindReadingSection)
// })

// xrayButton.addEventListener('click', () => {
//     changeClass(xraySection)
// })

enableAllPowers.addEventListener('click', () => {
    allSections.forEach(section => {
        section.classList.remove('disabled')
        section.classList.add('enabled')
    })
})

disableAllPowers.addEventListener('click', () => {
    allSections.forEach(section => {
        section.classList.remove('enabled')
        section.classList.add('disabled')
    })
})

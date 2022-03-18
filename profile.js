const favColor = document.querySelector(`#color`)
const favPlace = document.querySelector(`#place`)
const favRitual = document.querySelector(`#ritual`)

const tellColor = (e) => {
    alert(`My favorite color is red`);
}
favColor.addEventListener(`click`, tellColor)

const tellPlace = (e) => {
    alert(`My favorite place is Alaska`);
}
favPlace.addEventListener(`click`, tellPlace)

const tellRitual = (e) => {
    alert(`My favorite ritual is eating`);
}
favRitual.addEventListener(`click`, tellRitual)

const radioYes = document.querySelector(`#yes`)
const radioNo = document.querySelector(`#def`)

const uncheckYes = () => {
    radioYes.checked = false
    alert(`Wonderful! Send me a carrier pigeon!`)
}
radioNo.addEventListener(`click`, uncheckYes)

const uncheckNo = () => {
    radioNo.checked = false
    alert(`Great! Email me!`)
}
radioYes.addEventListener(`click`, uncheckNo)
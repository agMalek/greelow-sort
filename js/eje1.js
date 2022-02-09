
const getRandomNumber = (desde, hasta) => {
    return Math.floor(Math.random()*(hasta-desde+1)+desde)
}

const palosIcon = ["♠", "♦", "♣", "♥"]
const palosName = ["spade", "diamond", "club", "heart"]
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


window.onload = () => {
    const indexPalos = getRandomNumber(0, 3)
    let iconoPalo = palosIcon[indexPalos]
    let nombrePalo = palosName[indexPalos]

    let numero = numeros[getRandomNumber(0, 12)]
    document.querySelector(".card").className += ` ${nombrePalo}`
    document.querySelector(".card").innerHTML = 
    `
        <div class="paloSuperior">${iconoPalo}</div>
        <div class="numeroCard">${numero}</div>
        <div class="paloInferior">${iconoPalo}</div>

    `
}























/* switch(palo){
    case 0: 
        document.querySelector(".card").innerHTML = "♠"
        break;
    case 1:
        document.querySelector(".card").innerHTML = "♦"
        break;
    case 2: 
        document.querySelector(".card").innerHTML = "♣"
        break;
    case 3: 
        document.querySelector(".card").innerHTML = "♥"
        break;
    default:
        console.log("ninguno")
        break;
} */
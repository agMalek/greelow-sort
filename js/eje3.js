
const getRandomNumber = (desde, hasta) => {
    return Math.floor(Math.random()*(hasta-desde+1)+desde)
}

const palosIcon = ["♠", "♦", "♣", "♥"]
const palosName = ["spade", "diamond", "club", "heart"]
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const tiempoCartaAutomatica = 10000

window.onload = () => {
    crearCarta()
}

const crearCarta = () =>{
    const indexPalos = getRandomNumber(0, 3)
    let iconoPalo = palosIcon[indexPalos]
    let nombrePalo = palosName[indexPalos]

    let numero = numeros[getRandomNumber(0, 12)]
    document.querySelector(".cards-container").innerHTML += 
    ` 
        <div class="card">
            <div class="paloSuperior ${nombrePalo}">${iconoPalo}</div>
            <div class="numeroCard">${numero}</div>
            <div class="paloInferior ${nombrePalo}">${iconoPalo}</div>
        </div>
    `
}

const actualizarMedidas = () => {
    let cards = document.querySelectorAll(".card")
    console.log(cards)
    cards.forEach(card => (
        cambiarMedidas(card)        
    ))
}

const cambiarMedidas = (card) => {
    let heigth = document.querySelector("#heigth").value
    let width = document.querySelector("#width").value
    console.log(heigth)
    card.style.width = `${width}px`
    card.style.height = `${heigth}px`
}


setInterval(() => {
    let interval = crearCarta()
    return clearInterval(interval)
}, tiempoCartaAutomatica);

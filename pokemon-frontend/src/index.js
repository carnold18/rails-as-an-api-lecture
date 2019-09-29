const baseUrl = "http://localhost:3000"
const pokemons = baseUrl+"/pokemons"
const trainers = baseUrl+"/trainers"

document.addEventListener("DOMContentLoaded", main)

function main() {
    getTrainers();
}

getTrainers = () => {
    fetch(trainers)
        .then(response => response.json())
        .then(data => renderTrainers(data))
}

renderTrainers = (trainers) => {
    for (let i = 0; i < trainers.length; i++) {
        renderTrainer(trainers[i])
    }
}

renderTrainer = (trainer) => {
    console.log("this is the trainer object", trainer)
    console.log("this is the trainer's pokemon", trainer.pokemons)
}
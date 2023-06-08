//map
//não vai alterar o objeto
//vai retornar um novo objeto RESPEITANDO o tamanho do objeto original

const {passengers} = require("../data");

//1. quantos anos eles tem?

const newPassengers = passengers.map(passenger => {
    return `${passenger.name} tem ${2023 - passenger.birthYear} anos`;
});

//console.table(newPassengers);

//2. encontre o nome palíndromo
const founds = passengers.map(passenger => {
    const reverseName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join('')

    if (reverseName.toLowerCase() === passenger.name.toLowerCase()) return `This is palindromo: ${passenger.name}`;
});

console.table(founds)

founds;
//foreach
//não é imutavel
const {passengers} = require("../data");
//1. Adicione a idade (Age) para cada pessoa

passengers.forEach(passenger => {
    passenger.age = 2023 - passenger.birthYear;
})

console.table(passengers);


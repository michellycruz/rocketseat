//FIND

const {passengers} = require("../data");

//1. ENCONTRE O PASSAGEIRO DE NOME: "ENZO"

const Enzo = passengers.find(
    passenger => passenger.name.toLowerCase() === 'enzo'
    );

console.table(Enzo);
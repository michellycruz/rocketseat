//sort
//ordenar elementos
//ordenação segue a regra do unicode ascii

const {shopCart, passengers} = require("../data")
//1. Organize o carrinho do maior número de produtos para o menor
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);

//console.table(orderByTotalProducts)
//2. organize os passageiros por nome.
const orderByPassengerName = passengers.sort((pa, pb) => {
    if(pa.name.toLowerCase() < pb.name.toLowerCase()) return -1;
    if(pa.name.toLowerCase() > pb.name.toLowerCase()) return 1;
    return 0;
});

console.table(orderByPassengerName);
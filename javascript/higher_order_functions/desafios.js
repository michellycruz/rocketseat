const {childrenAge, passengers} = require("./data");
const {mailList} = require("./data");



/*
Adicione o ano de nascimento das crianças para cada elemento do array
*/
const children = childrenAge.map(child => {
    return{
        Age: child,
        birthYear: 2023 - child
    }
})

console.table(children)

/**
 * Crie um array somente com os domínios da lista de email
 */
const domains = mailList.map(mail =>{
    const mailArray = mail.split("@")
    return mailArray[1]
})

console.table(domains)
/**
 * Encontre o maior preço dos produtos abaixo de 100 reais
 */
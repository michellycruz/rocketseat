//FILTER
const { childrenAge, mailList } =  require('../data')


//1. Crianças entre 2 - 11 anos

function childrenAge2to11(element, index, array){
    if(element >= 2 && element <= 11) return true;

    return false;
}


// imutabilidade (é o que não muda) // código em uma só linha
const childrenFiltered = childrenAge.filter(
    element => element >= 2 && element <= 11
);


//console.table(childrenFiltered)

//2. emails rocketseat.com.br

var filteredRocketseatMails = [];
for (var i = 0; i< mailList.length; i++){
    if(mailList[i].includes("@rocketseat.com")){
        filteredRocketseatMails.push(mailList[i]);
    }
}

//em uma só linha
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));

console.table(filteredMails);
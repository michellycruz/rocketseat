//FILTER
const { childrenAge } =  require('../data')


//1. Crianças entre 2 - 11 anos

function childrenAge2to11(element, index, array){
    if(element >= 2 && element <= 11) return true;

    return false;
}

childrenAge.filter(childrenAge2to11)
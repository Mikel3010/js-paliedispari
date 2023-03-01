'use strict'
// funzioni 
function oddEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// inizio 
const oddOrEven = prompt('scrvi pari o dispari');
console.log(oddOrEven)
const userNumber = Number(prompt('inserisci numero da 1 a 5'));
console.log(userNumber);

const pcNumber = getRndInteger(1, 5);
console.log(pcNumber);

const totNumber = oddEven(pcNumber+userNumber);

if(totNumber === true && oddOrEven === 'pari'){
    console.log('hai vinto')
    alert('hai vinto')
}
else if (totNumber === false && oddOrEven === 'dispari'){
    console.log('hai vinto')
    alert('hai vinto')
}
else{
    console.log('hai perso')
    alert('hai perso')
}
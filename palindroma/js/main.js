'use strict'

function verifica( parola ){
    const lung = parola.length;

    for( let i = 0; i < lung / 2; i++){

        if(parola[i] !== parola[lung - 1 -i]) {
            alert('Non è palindroma');
            return;
        }
    }
    alert('Parola palindroma')
}

const string = prompt('Inserisci una parola')

const value = verifica(string);

console.log(value); 

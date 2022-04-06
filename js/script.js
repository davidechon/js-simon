// alert("Hello World!");

// Consegna 
// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

////////////////////////////////////
// Flowchart

// 1. Cosa devo fare?
// Visualizza in pagina 5 numeri casuali (in un range tra 1 e 100)


// Questo genera un array con 5 numeri random che stampa a console e in html
const numeri = 5;
let numeriInseriti = [];

function stampaNum(numeri){

  for(i = 0; i < numeri; i++){
    const numRandom = Math.floor(Math.random() * 100 + 1);
    console.log('stampa ', numRandom);
    numeriInseriti.push(numRandom);
    document.getElementById('app').innerHTML = `<div>Primo numero casuale: ${numeriInseriti} </div>`;
  }
  
}
stampaNum(numeri);
console.log(numeriInseriti);





////////////////////////////////////
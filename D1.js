/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cnumber%c: questo datatype rappresenta tutti i dati numerici, inclusi numeri interi e decimali. viene utilizzato per fare calcoli e operazioni.', "color: green;", "");

console.log('%cstring%c: una stringa è una serie di caratteri (lettere, numeri o simboli) racchiusa tra virgolette. si usa per rappresentare del testo e dei dati basati su caratteri', "color: green;", "");

console.log('%cboolean%c: il boolean può assumere solo due valori: true o false. viene utilizzato per le espressioni condizionali e per determinare se una condizione è vera o falsa.', "color: green;", "");

console.log('%carray%c (mi baso sulla mia conoscenza di altri linguaggi ma penso sia lo stesso): un array è una struttura dati che contiene vari elementi ordinati. gli elementi all\'interno di un array sono accessibili tramite un index (indice) numerico, che rappresenta la posizione dell\'elemento nell\'array.', "color: green;", "");

console.log(`%cobject%c: non trovo un modo più breve per descriverlo: ogni object è come una valigia nella quale puoi inserire varie cose diverse, ognuna delle quali ha delle proprietà specifiche. 
  ad esempio puoi avere un oggetto chiamato "persona" con le proprietà "nome", "cognome".
    (esempio: 
      primo oggetto persona: 
        proprietà: 
          nome: mario; 
          cognome: rossi; 
      secondo oggetto persona: 
        proprietà:
          nome: peter; 
          cognome: parker;)`, "color: green;", "");

console.log('%cnull%c: questo datatype rappresenta l\'assenza di un valore. è come dire che non hai niente in una scatola vuota.', "color: green;", "");

console.log('%cundefined%c: quando qualcosa non è ancora stato assegnato o definito, è non definito. è come cercare di capire cosa c\'è in una scatola che non hai.', "color: green;", "");



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = 'Fabio'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const r = 12 + 20;
console.log('r')


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('è impossibile cambiare valore ad una variabile %cconst%c, perciò se si provasse ad usare il codice di seguito ci sarebbe un errore. ', "color: blue; background-color: black;", "")
// name = 'Simonelli'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const result = 4 - x; 
console.log(result)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john";
const name2 = "John";

let areDifferent = name1 !== name2;

console.log("le variabili sono diverse?:", areDifferent);

let areEqualInLowerCase = name1.toLowerCase() === name2.toLowerCase();

console.log("le variabili sono uguali in minuscolo?:", areEqualInLowerCase);



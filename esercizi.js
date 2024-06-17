// ESERCIZI STRINGHE E NUMERI

// 1)  SOMMA E MEDIA

// let somma = 0;
// let media = 0;

// a = 1;
// b = 2;
// c = 3;
// d = 4;
// e = 5;

// // SOMMA 
// somma = (` SOMMA È UGUALE A = ${a + b + c + d + e}`)
// console.log(somma);

// // MEDIA 
// media = (` MEDIA È UGUALE A = ${15/5}`);
// console.log(media);

// 2) ESERCIZIO GATTI IN FILA 

// let numerotot_gatti = 40;
// let numerogatti_infila = 6;

// let numfile = Math.round(numerotot_gatti / numerogatti_infila);
// console.log(numfile);

// let numrimastifuori = numerotot_gatti % numerogatti_infila;
// console.log(numrimastifuori);

// let gatti_mancanti = (numerogatti_infila - numrimastifuori);
// console.log(gatti_mancanti);

// // Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z
// console.log(`ci sono ${numfile} file di gatto e ne mancano ${gatti_mancanti} per una nuova fila, con una nuova fila di ${numrimastifuori}`);


// 3) ESERCIZIO CONTA IL TEMPO

// Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
//   poi stampi il risultato. L'output avrà solo numeri interi.

//   Esempio:
//     Input: 12560
//     Output: 3 ore, 29 minuti e 20 secondi.

// Input: numero di secondi
// let secondi = parseInt(prompt("Inserisci il numero di secondi:"));

// // Calcolo delle ore, minuti e secondi
// let ore = Math.round(secondi / 3600);
// let secondiRimasti = secondi % 3600;
// let minuti = Math.round(secondiRimasti / 60);
// let secondiFinali = secondiRimasti % 60;

// // Output
// console.log(`ore + ${ore} + minuti + ${minuti} + secondiFinali + ${secondi} `);
// alert(ore + " ore, " + minuti + " minuti, " + secondiFinali + " secondi"); 

// 4) ESERCIZIO ANNI PERSONA

// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
// - l'età della persona,
// - quanti anni sono necessari per raggiungere i 100
// Restituisca in output entrambi i risultati.

// let anno_corrente = 2024;
// console.log(`L'anno corrente è ${anno_corrente}`);

// let anno_nascita = 2000;
// console.log(`L'anno di nascita è ${anno_nascita}`)

// let età_persona = 0;
// let anni_cento = 0;


// let età = (anno_corrente - anno_nascita);
// console.log(`La persona ha ${età} anni`);

// let mancanti = (100 - età);
// console.log(`Per arrivare a 100 mancano ${mancanti} anni`)

// -------------------------------------------------------------


// ESERCIZI CONDIZIONI E CICLI 
// (CONDIZIONI -> IF , ELSE IF, SWITCH)
// (CICLI -> FOR E DO/WHILE)


// ESERCIZI CONDIZIONI

//  1) Maggiore e minore
// Scrivi un programma che dati quattro numeri in input,
// restituisca in output il maggiore e il minore.

// let scegli_numero = parseInt(prompt('Scegl il tuo numero'));
// // CONDIZIONE
// if(scegli_numero <= 5){
//     console.log('Minore di 5')
// }
// else if(scegli_numero <= 25){
//     console.log('Minore di 25')
// }

// else if(scegli_numero == 30){
//     console.log('UGUALE A 30')
// }

// else{
//     console.log('Non valido');
// }


// 2) Menù dei dolci 
// Scrivi un programma che dato il seguente menu (da stampare):
// MENU:
// 1. Tiramisù
// 2. Torta della nonna
// 3. Cheesecake alla nutella
// 4. Macedonia

// CONDIZIONE IF
// let scelta_dolce = String(prompt('Scegli il tuo dolce:\n 1 Tiramisù \n 2 Torta nonna \n 3 Cheescake Nutella \n 4 Macedonia \n '));

// if(scelta_dolce == 1){
//     alert('Ecco il tuo tiramisù');
// }
// else if(scelta_dolce == 2){
//     let diabete = prompt('Se soffri di diabete non puoi mangiare dolci, tu soffri?');
//     if(diabete == 'si'){
//         alert('Non puoi mangiare dolci');
//     }
//     else{
//         alert('Ok tieni la torta');
//     }
// }
// else if(scelta_dolce == 3){
//     let diabete = prompt('Se soffri di diabete non puoi mangiare dolci, tu soffri?');
//     if(diabete == 'si'){
//         alert('Mi dispiace, niente chhescake');
//     }
//     else{
//         alert('Ecco la tua cheescake');
//     }
// }
// else if(scelta_dolce == 4){
//     alert('Ecco la tua macedonia');
// }
// else{
//     alert('Prodotto non disponibile');
// }

// STESSO ESEMPIO CON CONDIZIONE SWITCH

// let scelta_dolce = String(prompt('Scegli il tuo dolce:\n 1 Tiramisù \n 2 Torta nonna \n 3 Cheescake Nutella \n 4 Macedonia \n '));
// switch(scelta_dolce){
//     case '1':
//         alert(' Il tuo tiramisù')
//     break; 
   
//     case '2':
//         let diabete_torta = prompt('Se soffri di diabete non puoi mangiare dolci, tu soffri?');
//         if(diabete_torta == 'si'){
//             alert('Non puoi mangiare dolci');
//         }
//         else{
//             alert('ok tieni la torta');
//         }
//         break;
    
//      case '3':
//         let diabete_cheescake = prompt('Se soffri di diabete non puoi mangiare dolci, tu soffri?');
//          if(diabete_cheescake == 'si'){
//             alert('Mi dispiace, niente cheesecake');
//          }

//         else{
//             alert('Ecco la tua cheescake');
//         }
//         break;
     
//        case '4':
//         alert('Ecco la tua macedonia');
//         default:     
// }


// ESERCIZIO CONDIZIONI IF PARI O DISPARI
//Scrivi un programma che prenda in input un numero e restituisca 0 se è pari o 1 se è dispari.

// let numero = parseInt(prompt('Decidi, Numero pari o dispari?'));

// // Verifichiamo se il numero è pari o dispari
// // IMPORTANTE QUA L'OPERATORE MODULO
// if(numero % 2 == 0){
//     alert(0);
// }
// else{
//     alert(1);
// }


// STESSO ESERCIZIO CON LO SWITCH

// let numero = parseInt(prompt('Decidi, Numero pari o dispari?'), 10);

// // Verifichiamo se il numero è pari o dispari usando switch
// switch (numero % 2) {
// // Codice da eseguire se la condizione numero === 0;
//     case 0:
//         alert('0 = Pari'); // Il numero è pari
//         break;

// // Codice da eseguire se la condizione numero === 1;
//     case 1:
//         alert('1 = Dispari'); // Il numero è dispari
//         break;
//     default:
//         alert("Errore: Input non valido");
// }

// ESERCIZIO CONDIZIONE CALCOLAATRICE 
// 1SOMMA 2SOTTRAZIONE 3 MOLTIPLICAZIONE 4 DIVISONE 5 MODULO 6POTENZA 7 MEDIA

// Chiedi all'utente di scegliere un'operazione tra quelle disponibili
// let operazioneScelta = prompt(`Scegli un'operazione tra:
//     - somma
//     - sottrazione
//     - moltiplicazione
//     - divisione
//     - modulo (solo tra interi)
//     - potenza
//     - media`).toLowerCase();

    
    
    // Per inserire manualmente dei numeri usare due variabili
    // Assegnando a queste variabili il valore input
    // Quindi num 1 - input , num 2 - input
    // let num1 = parseInt(prompt("Inserisci i numeri:"));
    // let num2 = parseInt(prompt("Inserisci i numeri:"));

    // // Esegui l'operazione scelta
    // if ((num1) && (num2)) {
    //   if (operazioneScelta === 'somma') {
    //     risultato = num1 + num2;
    //     alert(`La somma di ${num1} e ${num2} è ${risultato}`);
    //   } else if (operazioneScelta === 'sottrazione') {
    //     risultato = num1 - num2;
    //     alert(`La moltiplicazione tra ${num1} e ${num2} è ${risultato}`);
    //   } else if (operazioneScelta === 'moltiplicazione') {
    //     risultato = num1 * num2;
    //     alert(`Il prodotto di ${num1} e ${num2} è ${risultato}`);
    //   } else if (operazioneScelta === 'divisione') {
    //     if (num2 !== 0) {
    //       risultato = num1 / num2;
    //       alert(`Il quoziente di ${num1} diviso ${num2} è ${risultato}`);
    //     } else {
    //       alert(`Impossibile dividere per zero.`);
    //     }
    //   } else if (operazioneScelta === 'modulo') {
    //     if ((num1) && (num2)) {
    //       risultato = num1 % num2;
    //       alert(`Il resto della divisione intera tra ${num1} e ${num2} è ${risultato}`);
    //     } else {
    //       alert(`L'operazione di modulo richiede numeri interi.`);
    //     }
    //   } else if (operazioneScelta === 'potenza') {
    //     risultato = Math.pow(num1, num2);
    //     alert(`${num1} elevato alla ${num2}-esima potenza è ${risultato}`);
    //   } else if (operazioneScelta === 'media') {
    //     risultato = (num1 + num2) / 2;
    //     alert(`La media tra ${num1} e ${num2} è ${risultato}`);
    //   } else {
    //     alert('Operazione non valida.');
    //   }
    // } else {
    //   alert('Inserisci numeri validi.');
    // }
    
// OPERATORE LOGICO MATH.POW
// let base = 2;
// let esponente = 3;

// let risultato = Math.pow(base, esponente);
// alert(risultato);


// ESERCIZIO CONTA CIFRE 
// Scrivi un programma che dato un numero 123456 conti da quante cifre è formato.
 
// let num1 = 214;
// let numCifre1 = num1.toString().length;
// alert(`Il numero ${num1} ha ${numCifre1} cifre `);

// // ---------- //

// let num2 = 245;
// let numcifre2 = num2.toString().length;
// alert(`Il numero ${num2} ha ${numcifre2} cifre `);


// ESERCIZIO FAI IL PROFESSORE CON CONDIZIONI IF ECC
//Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// let voto = Number(prompt('Inserisci il tuo voto'));

// if(voto <= 18){
//     alert('Insufficiente');
// }
// else if(voto >= 18 && voto <= 24){
//     alert('Sufficiente');
// }
// else if(voto >= 24 && voto <= 27 ){
//     alert('Distinto')
// }
// else if(voto >= 27 && voto <= 29){
//     alert('Ottimo')
// }
// else if(voto <= 30){
//     alert('Eccellente');
// }
// else{
//     alert('Voto non valido');
// }

// Struttura con lo switch

// let voto = Number(prompt('Inserisci il tuo voto'));

// switch(true){
//     case(voto <= 18):
//     alert('insufficiente')
//     break;

//   case(voto >= 18 && voto <= 24 ):
//   alert('Sufficiente');
//    break;

//    case(voto >= 24 && voto <= 27):
//    alert('Distinto');
//    break;

//    case(voto >= 27 && voto <= 29):
//    alert('Ottimo')
//    break;

//    case(voto <= 30):
//    alert('Eccellente')
//    break;
       
//    default:
//    alert('Voto non valido')
//    break;
// }


// ESERCIZIO CHI L'AZZECCA CONDIZIONE IF 
// Scrivi un programma che dati due numeri di due ipotetici giocatori,
// generi un numero casuale compreso tra 1 e 100 (zero escluso),
// verifichi se uno dei due giocatori ha azzeccato il numero casuale,
// e in caso contrario quale dei due si è avvicinato di più al numero.

// Chiedi i numeri ai due giocatori
// let numeroGiocatore1 = Number(prompt("Giocatore 1, inserisci il tuo numero (1-100):"));
// let numeroGiocatore2 = Number(prompt("Giocatore 2, inserisci il tuo numero (1-100):"));

// // Genera un numero casuale compreso tra 1 e 100
// let numeroCasuale = Math.floor(Math.random() * 100) + 1;

// console.log(`Il numero Casuale è ${numeroCasuale}`);

// // Verifica se uno dei due giocatori ha azzeccato il numero casuale
// if (numeroGiocatore1 === numeroCasuale) {
//     alert("Giocatore 1 ha azzeccato il numero!");
// } else if (numeroGiocatore2 === numeroCasuale) {
//     alert("Giocatore 2 ha azzeccato il numero!");
// } else {
//     // Se nessuno ha azzeccato, verifica chi si è avvicinato di più
//     let differenzaGiocatore1 = Math.abs(numeroGiocatore1 - numeroCasuale);
//     let differenzaGiocatore2 = Math.abs(numeroGiocatore2 - numeroCasuale);
    
//     if (differenzaGiocatore1 < differenzaGiocatore2) {
//         alert("Nessuno ha azzeccato il numero. Il giocatore 1 si è avvicinato di più.");
//     } else if (differenzaGiocatore2 < differenzaGiocatore1) {
//         alert("Nessuno ha azzeccato il numero. Il giocatore 2 si è avvicinato di più.");
//     } else {
//         alert("Nessuno ha azzeccato il numero. Entrambi i giocatori si sono avvicinati allo stesso modo.");
//     }
// }

// ESERCIZIO CHE GIORNO È OGGI? CONDIZIONE IF

// let giorno = Number(prompt(`Scegli il giorno della settimana:
//     1
//     2
//     3
//     4
//     5
//     6
//     7`));

//     if(giorno == 1){
//         alert('Il giorno è lunedi');
//     }
//     else if(giorno == 2){
//         alert('Giorno 2 = Martedì');
//     }
//     else if(giorno == 3){
//         alert('Giorno 3 = Mercoledì');
//     }
//     else if(giorno == 4){
//         alert('Giorno 4 = Giovedì');
//     }
//     else if(giorno == 5){
//         alert('Giorno 5 = Venerdì');
//     }
//     else if(giorno == 6){
//         alert('Giorno 6 = Sabato');
//     }
//     else if(giorno == 7 ){
//         alert('Giorno 7 = Domenica');
//     }
//     else{
//         console.log('Giorno 8 non esiste');
//         }


// ESERCIZIO CALDO O FREDDO CONDIZIONE IF

// let settimana = prompt(`Scegli il giorno della settimana per capire se c'è caldo o freddo:
//     Lunedi
//     Martedi
//     Mercoledi
//     Giovedi
//     Venerdi
//     Sabato
//     Domenica
//     Domedi`).toLowerCase();

// if(settimana == "lunedi"){
//     alert("Lunedi ci sono 10°");
// } else if(settimana === "martedi"){
//     alert("Martedi ci sono 12°");
// } else if(settimana === "mercoledi"){
//     alert("Mercoledi ci sono 15°");
// } else if(settimana === "giovedi"){
//     alert("Giovedi ci sono 18°");
// } else if(settimana === "venerdi"){
//     alert("Venerdi ci sono 20°");
// } else if(settimana === "sabato"){
//     alert("Sabato ci sono 22°");
// } else if(settimana === "domenica"){
//     alert("Domenica ci sono 25°");
// }
// else if(settimana == "domedi"){
//   alert("Domedi ci sono 30 gradi")
// }
// else {
//     alert("Giorno non valido. Per favore, inserisci un giorno della settimana corretto.");
// }

// ---------- //

// ESERCIZI CON CICLI FOR E WHILE DO WHILE
// ESERCIZI DELLE TABELLINE CON IL CICLO FOR


// let num = 3;

// for(let i = 1; i <= 10; i++){
//     alert(`La tabellina è la seguente -> ${num} x ${i} = ${num * i}`);
// }


// ESERCIZIO LANCIO DEL DADO CICLO FOR 

//  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
//  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
//  Supponendo che ogni dado abbia al massimo 6 facce.


// Chiedi all'utente di inserire il numero di tiri per ciascun giocatore (N)

// let N_volte = Number(prompt('Numero di tiri per i giocatori'));

// // Inizializza le variabili per i punteggi totali dei due giocatori

// let punteggio_Player1 = 0;
// let punteggio_Player2 = 0;

// // Ciclo per simulare il tiro dei dati dei Player

// for(let i = 1; i <= N_volte; i++){
//     // Per simulare il tiro dei dadi dei Player usare gli operatori Math
//     let dado_Player1 = Math.floor(Math.random() * 6) +1;
//     let dado_Player2 = Math.floor(Math.random() * 6) +1;


// // Per aggiornare i punteggi dei Player usare le varaibili nelle seguenti maniere

// punteggio_Player1 += dado_Player1;
// punteggio_Player2 += dado_Player2;

// }

// // Per determinare il vincitore confrontando i punteggi totali scrivere la cnodizione seguente

// if(punteggio_Player1 > punteggio_Player2){
//     alert(`Il giocatore 1 ha vinto con un punteggio di ${punteggio_Player1}`);
// }
// else if(punteggio_Player2 > punteggio_Player1){
//     alert(`Il giocatore 2 ha vinto con un punteggio di ${punteggio_Player2} `);
// }
// else{
//     alert(`Pareggio! Entrambi i giocatori hanno totalizzato ${punteggio_Player1} punti`);
// }


// ESERCIZIO CICLO FOR RINCORRI LA DECINA
// Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.

// for(let i = 1; i <= 100; i++ ){
// console.log(i + "\t");
//   if(i % 10 == 0){
//     console.log();
//   }
// }

// ESERCIZIO CICLO FOR IL CALENDARIO MEDIOCRE
// Scrivi un programma che dato:
// - Il numero di giorni nel mese
// - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
// Stampi il calendario di un mese.

function stampaCalendario(giorniNelMese, primoGiornoSettimana) {
    const giorniSettimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

    // Stampa i giorni della settimana
    let calendario = '';
    for (let i = 0; i < 7; i++) {
        calendario += giorniSettimana[i] + '\t';
    }
    calendario += '\n';

    // Aggiungi celle vuote per i giorni prima dell'inizio del mese
    for (let i = 0; i < primoGiornoSettimana; i++) {
        calendario += '\t';
    }

    // Stampa i giorni del mese
    for (let giorno = 1; giorno <= giorniNelMese; giorno++) {
        calendario += giorno + '\t';

        // Vai a capo ogni domenica
        if ((giorno + primoGiornoSettimana) % 7 === 0) {
            calendario += '\n';
        }
    }

    console.log(calendario);
}

// Esempio: stampare il calendario di un mese con 30 giorni che inizia di mercoledì (2)
stampaCalendario(30, 2);

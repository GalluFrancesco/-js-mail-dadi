// La lista delle mail che possono accedere
// const mailList = ['uno@mail.it', 'due@mail.it', 'tre@mail.it'];
// Chiedere all’utente la sua mail, se è presente consentire l'accesso e dare il benvenuto
// Altrimenti impedire accesso

// prendo dal DOM la parte dove stampare i risultati
// 1. definisco array mail
// 1b definisco variabile false
const stampHtml=document.querySelector(".stamp")
const mailList = ['uno@mail.it', 'due@mail.it', 'tre@mail.it'];
let trovato = false; // questa solitamente si definisce variabile flag

// 2. chiedo all'utente il suo nome
let mail = prompt('Inserire la tua mail!');

// 3. con un for ciclo all'interno dell'array e verifico se la mail dell'utente
// è uguale a quello che in quel momento sto leggendo all'interno del ciclo
// => (if) se la mail è uguale a quello dell'invitato trasformo una variabile in TRUE
// altrimenti la lascio in FALSE
for (let i = 0; i <mailList.length; i++) {
    if (mail.toLowerCase() === mailList[i].toLowerCase()) {
        trovato = true;
        break;
    }
}

// 4. uscito dal ciclo controllo se questa variabile sia mai diventata true, se sì vuol dire che 
// l'utente può entrare.

if (trovato) {
    stampHtml.innerHTML=`Acesso effettuato con successo, Benvenuto ${mail}`
} else {
    stampHtml.innerHTML='Attenzione! La tua mail non è stata trovata.'
}

//-----------------------------------------------------
//esercizio dadi


// Creo 2 constanti che conterranno un valore random da 1 a 6

const dicePlayer = Math.floor(Math.random() * 6) + 1;
const diceComputer = Math.floor(Math.random() * 6) + 1;

//stampo i risultati del landio di dadi
const stamp2Html=document.querySelector(".stamp2")
stamp2Html.innerHTML=`Il computer ha totalizzato ${diceComputer} </br>
                      Il giocatore ha totalizzato ${dicePlayer}`


//verifico chi ha totalizzato il punteggio più alto e stampo il vincitore
if(dicePlayer === diceComputer) {
    document.querySelector("h1").innerHTML= "Draw!";
} else if(dicePlayer < diceComputer) {
    document.querySelector("h1").innerHTML= ("Computer WINS!");
} else{
    document.querySelector("h1").innerHTML= ("Player WINS!");
}


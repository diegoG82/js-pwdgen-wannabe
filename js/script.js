// TEST JS
// alert("CIAO!")


// ESERCIZIO DA SVOLGERE:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// RACCOLTA DATI:

// Chiedere il nome all'utente:
const username = prompt("Come ti chiami?");
// inserire console log con verifica del tipo di dato acquisito
console.log(username, typeof username );

// chiedere il cognome all'utente:
const surname = prompt("Qual'e'il tuo cognome?")
// inserire console log con verifica del tipo di dato acquisito
console.log(surname, typeof surname);

// Chiedere all'utente qual'e' il suo colore preferito
const favouritecolor = prompt("Qual'è il tuo colore preferito?")
// inserire console log con verifica del tipo di dato acquisito
console.log(favouritecolor, typeof favouritecolor);


// Composizione della password combinando i dati
const message = `${username}${surname}${favouritecolor}21`;
console.log(message);

// OUTPUT DEI DATI
document.getElementById("insicurissima").innerHTML = message;




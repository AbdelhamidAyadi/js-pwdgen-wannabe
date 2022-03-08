const nome = prompt ("Inserisci il tuo nome: ");
const cognome = prompt ("Inserisci il tuo cognome: ");
const colore = prompt ("Inserisci il tuo colore preferito: ");

document.getElementById("generatedPassword").innerHTML = nome + cognome + colore + "21";

const ticketPrice = 0.21; //al km

const utente = prompt("Inserisci il tuo nome");
document.getElementById("welcome").innerHTML = `Benvenuto, ${utente}`;

const kmPercorsi = parseInt(prompt("Inserisci i km che dovrai percorrere"));
const eta = parseInt(prompt("Inserisci la tua etá"));

const priceKm = parseFloat(ticketPrice * kmPercorsi); //prezzo del biglietto in base ai km effettuati

console.log(priceKm);

let priceDiscount = 0;
let finalPrice = 0;

if (eta <= 18){
   let priceDiscount = (priceKm * 20) / 100;
   let finalPrice = priceKm - priceDiscount;
   document.getElementById("price").innerHTML = ` Il prezzo del suo biglietto é: ${finalPrice} &euro`;
}
	else if(eta >= 65){
	let priceDiscount = (priceKm * 40) / 100;
	let finalPrice = priceKm - priceDiscount;
	document.getElementById("price").innerHTML = ` Il prezzo del suo biglietto é: ${finalPrice} &euro`;
}
	else{
		console.log("nessuno sconto applicato");
		let finalPrice = priceKm;
		document.getElementById("price").innerHTML = ` Il prezzo del suo biglietto é: ${finalPrice} &euro; `;
}

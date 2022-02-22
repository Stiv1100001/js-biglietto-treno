const km = parseInt(prompt('Quanti kilometri vuoi fare?'));
const age = parseInt(prompt('Quanti anni ha il passeggero?'));
const toPlace = document.getElementById('result');

if (isNaN(km) || isNaN(age)) {
	toPlace.innerHTML += ' Error: Please insert a valid number';
	exit;
}

const partialAmount = km * 0.21;
let totalAmount;

if (age < 18) {
	totalAmount = partialAmount - partialAmount * 0.2;
} else if (age > 65) {
	totalAmount = partialAmount - partialAmount * 0.4;
} else {
	totalAmount = partialAmount;
}

const result = totalAmount.toFixed(2);

toPlace.innerHTML += ` Il prezzo del biglietto è: ${result}&euro;`;

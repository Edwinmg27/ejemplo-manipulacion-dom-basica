// Forma profesional de trabajar en el dom es crear variables que representen a los selectores de cada uno de los elementos de html

const h1 = document.querySelector('h1'); // querySelector es una funcion y en un string tenemos que enviarle cual es el selector con el que queremos seleccionar al elemento html desde JS. este queryselector nos pide que seleccionemos las etiquetas, id o las clases que queremos seleccionar en html
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
	h1,
	p,
	parrafito,
	pid,
	input
})
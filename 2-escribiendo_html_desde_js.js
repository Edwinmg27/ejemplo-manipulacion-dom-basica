// Forma profesional de trabajar en el dom es crear variables que representen a los selectores de cada uno de los elementos de html

const h1 = document.querySelector('h1'); // querySelector es una funcion que se usa como CSS y en un string tenemos que enviarle cual es el selector con el que queremos seleccionar al elemento html desde JS. este queryselector nos pide que seleccionemos las etiquetas, id o las clases que queremos seleccionar en html
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
	h1,
	p,
	parrafito,
	pid,
	input
})

h1.innerHTML = 'Patito'; // innerHTML permite modificar el html interno, del elemento que estemos seleccionando
h1.innerText = 'Patito <br> Feo'; // esto convierte a texto

//Formas de MODIFICAR un ATRIBUTO
console.log(h1.getAttribute('pantalla') );// nos ayuda a leer algunos de los atributos que tenga nuestro elemento
h1.setAttribute('class', 'rojo'); // Forma de modificar los atributos de los elementos en HTML

// FORMA DE MODIFICAR CLASES DE HTML
h1.classList.add('morado');
h1.classList.remove('rojo');
// h1.classList.toggle('rojo'); // Para los eventos de JS este es bueno para agregar o quitar la clase
// h1.classList.contains('rojo'); // Es como una especie de condicional nos devuelve true o false dependiendo si nuestro elemento tiene la clase que le estemos colocando

// MODIFICAR EL VALOR DE UN INPUT
input.value = '456';

// COMO CREAR UN ELEMENTO HTML DESDE 0 CON JS
console.log(document.createElement('span'));
// Como hacemos para que la imagen la vean los usuarios
const img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1920px-Platzi.jpg')
console.log(img);
pid.innerHTML = "";
pid.append(img); 

// Recapitulacion creamos una imagen con document.createElement a esa imagen le pusimos los atributos e hicimos lo que tuvieramos que hacerle y luego estamos insertando la imagen dentro de un contenedor dentro de otro elemento que ya existia en html, y le estamos diciendo que por dentro va a tener la imagen
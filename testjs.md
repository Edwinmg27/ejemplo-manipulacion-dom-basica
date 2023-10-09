### 1 Responde las siguientes preguntas

- ¿Que es una variable y para que sirve? 
R: Las variables son espacios en memoria donde podemos guardar cosas, donde podemos guardar informacion los tipos de datos, caracteres, string, numeros, booleanos, true y false, incluso podemos guardar funciones (dependiendo de los tipos y estructuras de datos que soporte el lenguaje).

-¿Cual es la diferencia entre declarar e inicializar una variable?
R: Let nombre (crear una variable) esta parte es declarar, es decir crear una variable es declarar y asignarle un valor es inicializar, y si le cambiamos el valor o reasignamos un valor a la variable eso se llama reinicializar
R: la palabra reservada de variable LET nos permite cambiar el valor de nuestras variables en el futuro
R: la palabra reservada de variable CONST no permite cambiar el valor de la variable en el futuro. porque son constantes 

-¿Cual es la diferencia de sumar numeros y concatenar strings?
R: let suma 2 + 2 esto da un resultado de 4.. let sumaString = "Hola, " + "Juan" nos da el resultado de un texto concatenado

-¿Cual operador permite sumar o concatenar?
R: el operador que nos permite sumar o concatenar es el +, Este operador nos permite sumar numeros cuando lo sumamos con numeros. Pero con string lo que hace es unir (concatenar) ambos string

### 2 Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:
- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: numerico
- Correo electronico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3 Traduce a codigo JS las variables del ejemplo anterior
```js
let nombre = 'Edwin';
let apellido = 'Molina';
let username = 'edwinmg';
let edad = 19;
let mail = 'edwinmg27@gmail.com';
let isMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior
- nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
```js
let nombreCompleto = nombre + ' ' + apellido; 
let dineroReal = dineroAhorrado - deudas;
```

## Funciones
### 1 Responde las siguientes preguntas
-¿Que es una funcion?
R: Las funciones nos permiten encapsular (guardar como una cajita dentro de otra cajita) bloques de codigo para reutilizarlos y ejecutarlos en el futuro, una funcion se ejecuta cuando se manda a llamar ejemplo nombreCompleto()

-¿Cuando me sirve usar una funcion en mi codigo?
R: Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros o argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro.

R: Tambien nos sirve para ordenar y mejorar la legibilidad del codigo.

-¿Cual es la diferencia entre parametros y argumentos de una funcion?

R:Las funciones reciben parametros cuando las creamos que van dentro de las parentesis (name, lastName). Y les enviamos argumentos cuando las ejecutamos.

### 2 Convierte el siguiente bloque de codigo en una funcion, pero cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:
```js
const name = "Edwin";
const lastname = "Molina";
const completeName = name + lastname;
cost nickname = "edwinmg";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function nombreCompleto(name, lastname) {
	return name + ' ' + lastName
}

function saludo(name, lastname, username <-- esto son parametros de una funcion y los argumentos son las salidas que muestra la funcion) {
	const completeName = nombreCompleto(name, lastname);

	console.log("Mi nombre es " + completeName +", pero prefiero que me digas " + username + ".");
}
```

## Condicionales

### 1 Responde las siguientes preguntas:

-¿Que es una condicional?

R: Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

-¿Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?
R: Existen condicionales IF (incluyen el else y else if), switch
El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.

-¿Puedo combinar funciones y condicionales?
R: Si. las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

### 2 Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if:
```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
	case "Free":
		console.log("Solo puedes tomar los cursos gratis");
		break;
	case "Basic":
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		break;
	case "Expert":
		console.log("Puedes tomar casi todos los cursos de platzi durante un año");
		break;
	case "ExpertDuo":
		console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año");
		break;
}
```

```js
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion === 'Free') {
	console.log("Solo puedes tomar los cursos gratis");
	return
    } 
    if (suscripcion === 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
	return
    }
    if (suscripcion === 'Expert') {
	console.log("Puedes tomar casi todos los cursos de platzi durante un año");
	return
    } 
    if (suscripcion === 'ExpertDuo') {
	console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año");
	return
    }
	console.warn('Ese tipo de suscripcion no existe')
}
```

Bonus: si ya eres una experta o experto en el lenguaje, te desafio a comentar como replicar este comportamiento con arrays o objetos y un solo condicional.
```js
const tiposDeSuscripciones = {
	free: 'Solo puedes tomar los cursos gratis',
	basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
	expert: 'Puedes tomar casi todos los cursos de platzi durante un año',
	expertduo: 'Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año'
};

function conseguirTipoDeSuscripcion(suscripcion) {
	if (tiposDeSuscripciones[suscripcion]) {
		console.log(tiposDeSuscripciones[suscripcion]);
		return;
	}
	console.warn('Ese tipo de suscripcion no existe')
}
```

### 3 Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if(sin else ni else if)

## Ciclos
### 1 Responde las siguientes preguntas:

-¿Que es un ciclo?

R: La forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

-¿Que tipos de ciclos existen en Javascript?

R: While (While hace la validacion antes de ejecutar la primera vez el bloque de codigo), do while (Do while la primera vez no hace la validacion, primero se ejecuta y luego valida), for (For nos pide que inicialicemos una variable y definamos algun momento en que nuestro ciclo deba terminar (validacion) y ademas alguna variable que deba cambiar).

-¿Que es un ciclo infinito y porque es un problema?

R: Es cuando la validacion de nuestros condicionales nunca se cumple y termina dañando la aplicacion

-¿Puedo mezclar ciclos y condicionales?
R: Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo

### 2 Replica el comportamiento de los siguientes ciclos utilizando ciclos while:
```js
for (let i = 0; i < 5; i++) {
	console.log ("El valor de i es: " + i);
}

while (i < 5) {
    console.log("El valor de i es : " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
	console.log ("El valor de i es: " + i);
}

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3 escribe un código en javascript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal volvemos a empezar.
```js
Se declara la variable
let respuesta;
Se crea el ciclo 
while (respuesta != '4') {
	# se declara e inicializa la variable pregunta 
	let pregunta = prompt('¿Cuanto es 2 + 2?')
	respuesta = pregunta;
}
```

## Listas
### 1 Responde las siguientes preguntas:

-¿Que es un array?
R: Es una lista de elementos.
```js
const array = [1, "lala", true, false];
```

-¿Que es una lista?
R: Es una lista de elementos PERO cada elemento tiene un nombre clave.
```js
const obj = {
	nombre: 'Fulanito',
	edad: 3
};
```

-¿Cuando es mejor usar objetos o arrays?
R: Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir). Mientras que en un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

-¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R: Si. los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2 Crea una funcion que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}

imprimirPrimerElementoArray(['Juanita', 'Pedrito', 'Fulanita']);
```

### 3 Crea una funcion que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

### 4 Crea una funcion que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno.
```js
function imprimirElementoPorElementoObjeto(obj) {
	const arr = Object.values(obj);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}
```
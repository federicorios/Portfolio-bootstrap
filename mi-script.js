

	var nombre = 123;
	console.log(nombre);

	var numero =  15.6;
	var texto = "Federico";

	console.log(numero, texto);


var arrayDeTexto = ["hola", "chau"];
console.log(arrayDeTexto);


var arrayDeNumeros = [1,2,3,4,5];
console.log(arrayDeNumeros);

var arrayDeArray = [1,[2,3],4,5];
console.log(arrayDeArray);


console.log(arrayDeTexto[0]);

var	haces = confirm("Haces?");
console.log(haces);


//Los valores de un prompt siempre van a ser convertidos a textos.
if (haces == false) {
	var	porqnohaces = prompt("por que no Haces?");
	console.log(porqnohaces);
};

//Con parseINt lo pasa a numero
if (haces == true) {
	var cuantas = prompt("cuantas veces?");
	console.log(parseInt(cuantas));
};

/// === iguala tipo de datos en este caso numero y texto no es igual, devuelve false.

var resultado = cuantas === "5";
console.log(resultado);


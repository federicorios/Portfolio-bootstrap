/*       var	valor1 = parseInt(prompt("Ingrese el primer valor"));
	   console.log(valor1);
	   var	valor2 = parseInt(prompt("Ingrese el segundo valor"));
       console.log(valor2);
	   var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");
*/
/*
	var resultado = valor1 + valor2;

	var suma = operacion == "+" ? parseInt(valor1) + parseInt(valor2) : null;
	console.log(suma);
    
	var resta = operacion == "-" ? parseInt(valor1) - parseInt(valor2) : null;
	console.log(resta);

    var multiplicacion = operacion == "*" ? parseInt(valor1) * parseInt(valor2) : null;
	console.log(multiplicacion);

    var division = operacion == "%" ? parseInt(valor1) % parseInt(valor2) : null;
	console.log(division);
*/

// resultado = null;

// do {   	
// 		var	valor1 = parseInt(prompt("Ingrese un valor"));
// 		if (valor1) {
// 		var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");

// 		    switch(operacion){
// 		    	    case "+":
// 			        resultado += valor1;
// 			        console.log(resultado);
// 			        break;
// 		    	    case "-":
// 			        resultado -= valor1;
// 			        console.log(resultado);
// 			        break;  
// 		    }
	    	
// 	} else { 
// 		   	console.log('No se reconoce el valor');
// 	     	alert('no se reconoce el valor.');
// 		  };
// 	}


// while (confirm("¿Quiere seguir operando?"));

// console.log("resultado final: ", resultado);






// var resultado = null;
// if (valor1 && valor2 != null) {

// switch(operacion) {
//     case "+":
//         resultado = (valor1) + (valor2);
//         console.log(resultado);

//         break;
//     case "-":
//         var resultado = (valor1) - (valor2);
// 		console.log(resultado);
//         break;
//     case "*":
//         var resultado = (valor1) * (valor2);
// 		console.log(resultado);
//         break;
//     case "/":
//         var resultado = (valor1) / (valor2);
// 		console.log(resultado);
//         break;
//     default: 
//     	console.log('no se reconoce el simbolo');
//     	alert('no se reconoce el simbolo de la operacion.');
//     	break;

    	

// }
// 		var contninuar = confirm("¿Quiere seguir operando?");
// 		if (contninuar == true) {

// 			var	valor3 = parseInt(prompt("Ingrese el tercer valor"));
// 		    console.log(valor3);
// 	    	var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");


// 			switch(operacion) {
// 		    case "+":
// 		        resultado = resultado + valor3;
// 		        console.log(resultado);
// 		        break;
// 		    case "-":
// 		        resultado = resultado - valor3;
// 				console.log(resultado);
// 		        break;
// 		    case "*":
// 		        resultado = resultado * valor3;
// 				console.log(resultado);
// 		        break;
// 		    case "/":
// 		        resultado = resultado / valor3;
// 				console.log(resultado);
// 		        break;
// 		    default: 
// 		    	console.log('no se reconoce el simbolo');
// 		    	alert('no se reconoce el simbolo de la operacion.');
	    	
//  }
// };
// 				var contninuar = confirm("¿Quiere seguir operando?");
// 				if (contninuar == true) {

// 					var	valor3 = parseInt(prompt("Ingrese el tercer valor"));
// 				    console.log(valor3);
// 			    	var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");


// 					switch(operacion) {
// 				    case "+":
// 				        resultado = resultado + valor3;
// 				        console.log(resultado);
// 				        break;
// 				    case "-":
// 				        resultado = resultado - valor3;
// 						console.log(resultado);
// 				        break;
// 				    case "*":
// 				        resultado = resultado * valor3;
// 						console.log(resultado);
// 				        break;
// 				    case "/":
// 				        resultado = resultado / valor3;
// 						console.log(resultado);
// 				        break;
// 				    default: 
// 				    	console.log('no se reconoce el simbolo');
// 				    	alert('no se reconoce el simbolo de la operacion.');
		    	
//  }
// };
// 						var contninuar = confirm("¿Quiere seguir operando?");
// 						if (contninuar == true) {

// 							var	valor3 = parseInt(prompt("Ingrese el tercer valor"));
// 						    console.log(valor3);
// 					    	var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");


// 							switch(operacion) {
// 						    case "+":
// 						        resultado = resultado + valor3;
// 						        console.log(resultado);
// 						        break;
// 						    case "-":
// 						        resultado = resultado - valor3;
// 								console.log(resultado);
// 						        break;
// 						    case "*":
// 						        resultado = resultado * valor3;
// 								console.log(resultado);
// 						        break;
// 						    case "/":
// 						        resultado = resultado / valor3;
// 								console.log(resultado);
// 						        break;
// 						    default: 
// 						    	console.log('no se reconoce el simbolo');
// 						    	alert('no se reconoce el simbolo de la operacion.');
	    	
//  }
// };
// };

//recorrer un array
 
// var dias= ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' , 'domingo'];

//   for (var i = 0; i < dias.length ; i++) {
// 	console.log(i, dias[i]);

// 	if (dias[i]=== "jueves" || dias[i]=== "sabado" ) {
// 		console.log('encontre a ' + dias[i]);
// 		//alert('encontre jueves.');
// 	};
// };



//FUNCIONES 

// function nombreCompleto(nombre,apellido){
// 	return nombre + " " + apellido;

// }

// var miNombreCompleto = nombreCompleto("Federico", "r");
// console.log(miNombreCompleto);


// function calculador(valor1, valor2, operacion) {
//     console.log(valor1, valor2, operacion);
//     if (operacion === 'suma') {
//         return valor1 + valor2;
//     } else if (operacion === 'resta') {
//         return valor1 - valor2;
//     }
// }
// var v1 = parseInt(prompt('Valor1?'));
// var v2 = parseInt(prompt('Valor2?'));
// var operacion = prompt('Operacion? (suma || resta)');

// var resultadoSuma = calculador(v1, v2, operacion);
// console.log('Resultado=', resultadoSuma);




// function suma(valor1, resultado) {
//   		return resultado = resultado + valor1;
// }

// function resta(valor1, valor2) {
//   		return resultado = valor1 - valor2;
// }

// function multiplicacion(valor1, valor2) {
//   		return resultado = valor1 * valor2;
// }




// resultado = null;

// do {   	
// 		var	valor1 = parseInt(prompt("Ingrese un valor"));
// 		if (valor1) {
// 		var	operacion = prompt("Ingrese el simbolo de la operacion que quiere hacer");
		
// 		    switch(operacion){
// 		    	    case "+":
// 			        var valor = suma(valor1,resultado);
// 			        console.log(valor);
// 			        break;

// 		    }
	    	
// 	} else { 
// 		   	console.log('No se reconoce el valor');
// 	     	alert('no se reconoce el valor.');
// 		  };
// 	}


// while (confirm("¿Quiere seguir operando?"));

// console.log("resultado final: ", valor);





function calculadora(operacion,valor1,valor2) {

		var resultado = null;
		if (valor1 && valor2 != null) {

		switch(operacion) {
		    case "+":
		        resultado = (valor1) + (valor2);
		        console.log(resultado);

		        break;
		    case "-":
		        var resultado = (valor1) - (valor2);
				console.log(resultado);
		        break;
		    case "*":
		        var resultado = (valor1) * (valor2);
				console.log(resultado);
		        break;
		    case "/":
		        var resultado = (valor1)/(valor2);
				console.log(resultado);
		        break;
		    default: 
		    	console.log('no se reconoce el simbolo');
		    	var error = "error";
		    	return resultado = null;
		    	break;
	}
		
  		return resultado;

}}


  	
	    var	operacion = prompt("Ingrese el simbolo de la operacion que desea realizar. (+)(-)(*)(/)");
		var	valor1 = parseFloat(prompt("Ingrese un valor"));
		var	valor2 = parseFloat(prompt("Ingrese otro valor"));
		var resultadoFinal = calculadora( operacion, valor1, valor2);
		
			
			if (isNaN(resultadoFinal)) {
				 alert('Hubo algun error en los valores');
			}
			else{ 
				 if (resultadoFinal == null) {
			     alert('no se reconoce el simbolo de la operacion.');
		        }
		else{
			console.log("El resultado final es ",resultadoFinal);
		};
	};








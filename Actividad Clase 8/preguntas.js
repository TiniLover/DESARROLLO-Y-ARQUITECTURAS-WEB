
var num1 = 15;
var num2 = 27;
var suma = num1 + num2;
console.log("Pregunta 1 - Suma:", suma);


var str1 = "Hola";
var str2 = " Mundo";
var concatenacion = str1 + str2;
console.log("Pregunta 2 - Concatenacion:", concatenacion);


var palabra1 = "JavaScript";
var palabra2 = "Programacion";
var sumaLargos = palabra1.length + palabra2.length;
console.log("Pregunta 3 - Suma de largos:", sumaLargos);


var texto4 = "hola mundo js";
var mayusculas = texto4.toUpperCase();
console.log("Pregunta 4 - Mayusculas:", mayusculas);


var texto5 = "Programacion";
var primerosCinco = texto5.substring(0, 5);
console.log("Pregunta 5 - Primeros 5 chars:", primerosCinco);


var texto6 = "JavaScript";
var ultimosTres = texto6.substring(texto6.length - 3);
console.log("Pregunta 6 - Ultimos 3 chars:", ultimosTres);

var texto7 = "hOLA MUNDO JS";
var primeraMayus = texto7.substring(0, 1).toUpperCase() + texto7.substring(1).toLowerCase();
console.log("Pregunta 7 - Primera mayuscula:", primeraMayus);


var texto8 = "hola mundo javascript";
var posEspacio = texto8.indexOf(" ");
console.log("Pregunta 8 - Posicion primer espacio:", posEspacio);


var texto9 = "hOLA mUNDO";
var espacio = texto9.indexOf(" ");
var primeraWord = texto9.substring(0, espacio);
var segundaWord = texto9.substring(espacio + 1);
var resultado9 =
    primeraWord.substring(0, 1).toUpperCase() + primeraWord.substring(1).toLowerCase() +
    " " +
    segundaWord.substring(0, 1).toUpperCase() + segundaWord.substring(1).toLowerCase();
console.log("Pregunta 9 - Capitalizado:", resultado9);
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


console.log("Pregunta 10 - Mes 5:", meses[4]);
console.log("Pregunta 10 - Mes 11:", meses[10]);


var mesesOrdenados = [...meses].sort();
console.log("Pregunta 11 - Ordenados:", mesesOrdenados);


meses.unshift("MesInicio");
meses.push("MesFin");
console.log("Pregunta 12 - Con elementos agregados:", meses);


meses.shift();
meses.pop();
console.log("Pregunta 13 - Sin extremos:", meses);


var mesesInvertidos = [...meses].reverse();
console.log("Pregunta 14 - Invertidos:", mesesInvertidos);


var mesesUnidos = meses.join("-");
console.log("Pregunta 15 - Unidos con guion:", mesesUnidos);


var mayoANoviembre = meses.slice(4, 11);
console.log("Pregunta 16 - Mayo a Noviembre:", mayoANoviembre);

var aleatorio = Math.random();
if (aleatorio >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}
console.log("Pregunta 17 - Valor aleatorio:", aleatorio);


var age = 25;
var mensajeEdad;
if (age < 2) {
    mensajeEdad = "Bebe";
} else if (age >= 2 && age <= 12) {
    mensajeEdad = "Nino";
} else if (age >= 13 && age <= 19) {
    mensajeEdad = "Adolescente";
} else if (age >= 20 && age <= 30) {
    mensajeEdad = "Joven";
} else if (age >= 31 && age <= 60) {
    mensajeEdad = "Adulto";
} else if (age >= 61 && age <= 75) {
    mensajeEdad = "Adulto mayor";
} else {
    mensajeEdad = "Anciano";
}
alert(mensajeEdad);
console.log("Pregunta 18 - Edad:", age, "->", mensajeEdad);

var palabras = ["manzana", "banana", "naranja", "uva", "pera"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}


for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1);
    alert(palabraModificada);
}


var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim());
console.log("Pregunta 21 - Sentence:", sentence.trim());


var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("Pregunta 22 - Array de numeros:", numeros);


function suma(a, b) {
    return a + b;
}
var resultado = suma(10, 5);
console.log("Pregunta 23 - Suma:", resultado);

function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parametros tiene error: no es un numero");
        return NaN;
    }
    return a + b;
}
console.log("Pregunta 24 - Suma valida:", sumaValidada(3, 7));
console.log("Pregunta 24 - Suma invalida:", sumaValidada("tres", 7));

// Pregunta 25: Funcion que valida si un numero es entero
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("Pregunta 25 - 5 es entero:", validateInteger(5));
console.log("Pregunta 25 - 5.3 es entero:", validateInteger(5.3));


function sumaConEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parametros tiene error: no es un numero");
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Uno de los parametros tiene decimales, se redondeara el resultado");
        return Math.round(a + b);
    }
    return a + b;
}
console.log("Pregunta 26 - Suma con decimales:", sumaConEnteros(3.7, 2.1));
console.log("Pregunta 26 - Suma entera:", sumaConEnteros(3, 2));


function validarEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Uno de los parametros tienen decimales, se redondeara el resultado");
        return Math.round(a + b);
    }
    return a + b;
}

function sumaFinal(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parametros tiene error: no es un numero");
        return NaN;
    }
    return validarEnteros(a, b);
}
console.log("Pregunta 27 - sumaFinal(4, 5):", sumaFinal(4, 5));
console.log("Pregunta 27 - sumaFinal(4.5, 5.5):", sumaFinal(4.5, 5.5));
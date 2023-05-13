/*let sumar = require("./funcionalidades/suma");//se importan de a una las funcionalidades
let restar = require("./funcionalidades/resta");
let multiplicar = require("./funcionalidades/multiplicacion");
let dividir = require("./funcionalidades/division");

console.log(dividir(20,5));
var readline = require('readline-sync');

let {sumar, restar, multiplicar, dividir} = require("./funcionalidadesBasicas"); 

let n1 = readline.questionInt("decime un numero");
let n2 = readline.questionInt("decime un numero");

console.log(sumar(n1,n2));
console.log(restar(n1,n2));
console.log(multiplicar(n1,n2));
console.log(dividir(n1,n2));*/

/*var readline = require('readline-sync');

let n1 = readline.questionInt("ingrese primer numero");

console.log("su primer numero es " + n1);

let n2 = readline.questionInt("ingrese su segundo numero");

function operacion(n1,n2){
        return n1 + n2;
}


console.log(operacion(n1,n2));*/

/*var readline = require('readline-sync');

let nom1 = readline.question("ingrese sun nombre");

console.log("su nombre es " + nom1);

let nom2 = readline.question("ingrese su apellido");

console.log("su apellido es " + nom2);

function nombreC(nom1,nom2){
    
    return "El nombre completo es "+nom1+" "+nom2;
}
let nn = nombreC(nom1,nom2);
console.log(nn);
console.log("La cantidad de caracteres de su nombre completo es "+nn.length);

let nombres =["Silvio","Daniel","Mechi","Torcuato"]

function listadoNombres (nombres){
    return "el listado de nombres es "+ nombres
}

console.log(listadoNombres(nombres));
console.log(listadoNombres(nombres[3,0]));
console.log(listadoNombres(nombres.length));
console.log(listadoNombres(nombres.push("Aldana")));
console.log(listadoNombres(nombres));*



let numeros =[45,67,123,977,654,87,9,8,3,5,543,476];
let valor = numeros[0];

for (i=0;i<numeros.length;i++){
    if(numeros[i]>valor){
        valor=numeros[i];

    }
}

console.log("El numero mayor es" + valor)





/*for (i=0;i<numeros.length;i++){
    if(numeros[i]<valor){
        valor=numeros[i];

    }
}/*

console.log("El numero menor es" + valor);
let numeros=[9,56,764,46,5,45,34,3,53,453,4,583,8,4,3,75,36,492,3,86,98,2,34,7];
let acumulador = 0;

function promedio(numeros){
    for(i=0;i<numeros.length;i++){
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}
console.log(promedio(numeros));*/

/*
18) Realizar una función que reciba un arreglo de números y retorne los tres mayores del arreglo.


let numeros = [10, 15, 17, 9, 5, 20, 3, 12, 6, 8];
let mayorMenor = []

function orden(numeros) {
    for (let i = 0; i < numeros.length + 1; i++) {
        
        for (let j = 0; j < numeros.length + i - 1; j++) {
            if (numeros[j] > numeros[j - 1]) {
                [numeros[j], numeros[j - 1]] = [numeros[j - 1], numeros[j]];
            }
        }
    }

    return numeros;
}

mayorMenor = orden(numeros)

for(let j = 0; j < 3; j++){
    console.log("Posicion " + (j + 1) + ": " + mayorMenor[j]);
}

let futbolista = {
    nombre: 'Lionel',
    apellido: 'Messi',
    saludar: function() { return 'Me llamo Lionel Messi'; }
}
console.log(futbolista.saludar());*/


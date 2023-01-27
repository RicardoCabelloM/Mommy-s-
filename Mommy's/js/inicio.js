/*
const nombre = prompt("Ingresa tu nombre")
const nombre1 =prompt("Ingresa tu apellido")

alert(nombre + " " + nombre1)

console.log(nombre + " " + nombre1)

const pastelFresa = (250)
const payMango = (360)
const resultado = pastelFresa + payMango
console.log (resultado)
*/

/* Ejercicios - Condicionales*/
 
/*
alert ("Pastel de fresa $360");

const pastelDeFresa = 360;

const cantidadDePateles = prompt ("Solicita la cantidad de pasteles que desees")
console.log ("$" + pastelDeFresa * cantidadDePateles)
*/

/*
const anioActual = 2023;
const edad = prompt("Ingresa tu edad")
console.log (anioActual - edad)
alert ("Bienvenido ser del año:" + (anioActual - edad))
*/

/*alert("Ingresa el pais de latinoamerica a donde desearias viajar")

const pais= prompt("Ingresa un pais")

let costo= 0;

if(pais === "Colombia" || pais === "peru"){
    costo= 40;
} 
else if(pais === "Ecuador" || pais === "Brasil"){
    costo= 30;
}
else if(pais === "Mexico" || pais === "Estados Unidos"){
    costo= 50;
}

console.log ("el costo del viaje es:" + " "+ "$" + costo)*/


/*const nombre= prompt("Ingresa un nombre:")
let edad= prompt("Ingresa una edad:");

if(nombre === "Gabriel" && edad >= 24 ||nombre === "Maria" && (edad >= 28 && edad <= 35)){
    console.log("Mi nombre es: " + nombre)
    console.log("Mi edad es: " + edad)
}  else alert("No eres Gabriel o Maria")*/

/*if(nombre === "Maria" && (edad >= 28 && edad <= 35)){
    console.log("Mi nombre es " + nombre)
    console.log("Mi edad es: " + edad) 
} else if (alert("No eres Maria"));*/





/*INDEX*/

let costo= 0 

let pastel= prompt("Ingresa el nombre de los pasteles desees ordenar (El precio no incluye IVA 16%, escribe Salir para dejar de ordenar");

if (pastel === "Pay de fresa"){
    costo= 500;
} else if (pastel === "Pay de mango"){
    costo= 270;
} else if (pastel === "Pay de fresa mediano"){
    costo= 150;
} else if (pastel === "Pastel  cruz   azul" || precioPastel === "Pastel infantil" || pastel === "Pastel personalizado"){
    costo= 400;
} 

let costoTotal= (costo*16/100+costo);
alert ("Total a pagar= $" + costoTotal);

/* 16x400/100*/


// 1- Definir una variable numérica, asignarle un valor y sumarle 5.
let numero = 10;
numero += 5;
console.log("Resultado:", numero); // 15

//2- Definir dos variables de cadenas, asignarles valores y concatenarlas.
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo:", nombreCompleto); // Juan Pérez

//3- Evaluar si dos números son iguales, diferentes, mayor o menor (con if/else).
let a = 5;
let b = 7;

if (a === b) {
    console.log("Son iguales");
} else if (a > b) {
    console.log("El primero es mayor");
} else {
    console.log("El segundo es mayor");
}

//4- Utilizando “switch”. Definir una variable numérica. Asignarle un valor entre 1 y 10; mostrar a qué grupo pertenece:
//Grupo 1: del 1 al 3
//Grupo 2: del 4 al 6
//Grupo 3: del 7 al 10
let numero = 6;

switch (true) {
    case (numero >= 1 && numero <= 3):
        console.log("Grupo 1");
        break;
    case (numero >= 4 && numero <= 6):
        console.log("Grupo 2");
        break;
    case (numero >= 7 && numero <= 10):
        console.log("Grupo 3");
        break;
    default:
        console.log("Número fuera de rango");
}

// 5- Realizar la sumatoria de 0 a 10 y devolver el valor de la misma
let suma = 0;
for (let i = 0; i <= 10; i++) {
    suma += i;
}
console.log("Sumatoria de 0 a 10:", suma); // 55

// 6- Generar un array con 10 números, recorrerlo e ir multiplicando todos los elementos, finalmente obtener el producto total.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}
console.log("Producto total:", producto); // 3628800

// 7- Crear una función que reciba dos valores y retorne el producto de los mismos.
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 4)); // 12

// 8- Crear una función que reciba dos cadenas y retorne la concatenación de la misma.
function concatenar(cadena1, cadena2) {
    return cadena1 + cadena2;
}
console.log(concatenar("Hola ", "mundo")); // Hola mundo


// 9- Crear una función, a partir de la lógica aplicada en ejercicio 3, que reciba dos valores y muestre cuál es el mayor. En caso de ser iguales, deberá indicarlo.
function comparar(a, b) {
    if (a === b) {
        console.log("Son iguales");
    } else if (a > b) {
        console.log("El primero es mayor");
    } else {
        console.log("El segundo es mayor");
    }
}
comparar(10, 5); // El primero es mayor

// 10- Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se pasó como parámetro
function mostrarAsteriscos(n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += "*";
    }
    console.log(resultado);
}
mostrarAsteriscos(5); // *****

// 11-Crear una función que reciba el monto de un producto, y el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). 
// Si el monto del producto es menor a $200 no se aplicará ningún descuento, pero si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito. 
// Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago, dicho descuento es del 40%. 
// La función deberá retornar el monto final a abonar.

function calcularMontoFinal(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") descuento = 0.30;
        else if (medioPago === "D") descuento = 0.20;
        else if (medioPago === "C") descuento = 0.10;
    } else if (monto > 400) {
        descuento = 0.40;
    }

    let montoFinal = monto - (monto * descuento);
    return montoFinal;
}

console.log(calcularMontoFinal(250, "E")); // 175

// 12- Crear una función que reciba un número que represente la altura de un medio-árbol. Deberá generar de manera escalonada el mismo. Ejemplo: si la altura es 5 deberá mostrar:
//*
//* *
//* * *
//* * * *
//* * * * *
function medioArbol(altura) {
    for (let i = 1; i <= altura; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += "* ";
        }
        console.log(fila.trim());
    }
}

medioArbol(5);

//13- Crear una función que reciba un número que indica el día de la semana y retorne una cadena de texto indicando a qué día corresponde. Ejemplo: si es 1, deberá retornar lunes, 2 retornará martes, y así siguiendo. Si el día es 6 o 7 deberá retornar “fin de semana”. En caso de un valor que no represente un día de la semana deberá retornar un mensaje de error.
function diaSemana(numero) {
    switch (numero) {
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "miércoles";
        case 4: return "jueves";
        case 5: return "viernes";
        case 6: return "fin de semana"
        case 7: return "fin de semana";
        default: return "Error: día inválido";
    }
}

console.log(diaSemana(1)); // lunes
console.log(diaSemana(6)); // fin de semana
console.log(diaSemana(9)); // Error: día inválido

//14- Crear una función que genere un array de varios elementos numéricos y muestre por pantalla el promedio de esos números. El tamaño y los valores deben ser ingresados por el usuario (comando prompt) en dicho orden. 
//TIP: El dato ingresado con prompt es de tipo string, usar split() para quitar los espacios y usar la función Number para transformarlo.

function promedioUsuario() {
    // Pedir cantidad de números
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida");
        return;
    }

    // Pedir los números separados por espacios
    let entrada = prompt(`Ingrese ${cantidad} números separados por espacios:`);

    // Convertir el string a array de números
    let numerosStr = entrada.trim().split(/\s+/); // separa por uno o más espacios
    if (numerosStr.length !== cantidad) {
        console.log("La cantidad de números ingresados no coincide con la cantidad indicada.");
        return;
    }

    let numeros = numerosStr.map(numStr => Number(numStr));
    if (numeros.some(isNaN)) {
        console.log("Algunos valores no son números válidos.");
        return;
    }

    // Calcular promedio
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }
    let promedio = suma / cantidad;

    console.log("Promedio:", promedio);
}

promedioUsuario();






/* const num = prompt("programa que da la tabla de multiplicar de un numero, ingresa un numero:")

for (let i = 1; i <= 10; i++) {
    
    let num1 = num*i
    console.log(num1)
    
} */

// FORMA 1
// let num;
// let acumulado = 0;
// while (num!==0) {
//     num = parseInt(prompt("ingresa un numero"))
//     acumulado += num
//     console.log(acumulado)
// }



// FORMA 2
/* let value;
let array = []
while(value !== 0){
    value = parseInt(prompt("Ingresa un numero"))
    if(value === 0) {
        continue;
    }
    array.push(value)
    console.log(array)
}
 */



// // EJERCICIO 3
// let numeroIncognita = Math.floor(Math.random()*100) + 1;
// let intentos = 0;
// let valor;

// while(valor !== numeroIncognita && intentos < 3){
//     valor = parseInt(prompt("Ingresa un numero"))
//     if(valor < numeroIncognita) {
//         alert("El numero que buscas es mayor")
//     } else if (valor > numeroIncognita){
//         alert("El numero que buscas es menor")
//     }
//     intentos++
// }

// console.log("El numero era: " + numeroIncognita)

// //EJERCICIO 4
// let value = parseInt(prompt("Ingresa un numero para determinar si es primo:"))
// if(isNaN(value)){
//     alert("No es numero valido")
// } else {
//     let esPrimo = true;
//     if(value !== 2) {
//         for(let i = 2; i <= (value / 2); i++){
//             if(value % i === 0) {
//                 esPrimo = false
//                 break;
//             }
//         }
//     }
//     alert(esPrimo ? "El numero es primo" : "El numero no es primo")
// }

// EJERCICIO 5


let num = 10;
for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        console.log(i)
    }
    
}

// EJERCICIO 6



array = [1,2,3,4,5,6,7,8,9,10]
for (const numero of array) {
    console.log("elemento: ",numero)
}

//EJERCICIO 7



for (const numero of array) {
    console.log("elemento: ",numero*2)
}

// EJERCICIO 8


const familia = [{nombre: "Jhoan", Apellido: "Burbano", edad: 25, Genero: "Masculino",  },
    {nombre: "Lina", Apellido: "Ocampo", edad: 25, Genero: "femenino",  },
    {nombre: "Daniel", Apellido: "Samboni", edad: 23, Genero: "Masculino",  },
    {nombre: "Alexander", Apellido: "Lopez", edad: 40, Genero: "Masculino",  },
    {nombre: "Juan", Apellido: "Garcia", edad: 25, Genero: "Masculino",  },
]

for (const integrante in familia) {
    let saludo = `Hola, mi nombre es ${familia[integrante].nombre}. Tengo ${familia[integrante].edad} años.`;
    console.log(saludo);
    
  }
  

//EJERCICIO 9


for (const numero of array) {
    if (numero % 2 !== 0) {
        console.log(numero)
    }
}

// EJERCICIO 10

 /* let num1;
 let acumuladoPar = 0;
 let acumuladoImpar = 0;
 while (num1!==0) {
    num1 = parseInt(prompt("ingresa un numero"))
    if (num1 % 2 == 0) {
        acumuladoPar += num1
    }else{
        acumuladoImpar += num1
    }
     console.log(acumuladoPar)
     console.log(acumuladoImpar)
} */

// EJERCICIO 11

let mayor = array [0]

for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
console.log("el mayor es: ",mayor)

// EJERCICIO 12

let menor = array [0]

for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
console.log("el menor es: ",menor)

// EJERCICIO 13

/* let jugador1 = prompt("nombre del jugador 1: ")
let jugador2 = prompt("nombre del jugador 2: ")
let eleccion1, eleccion2;

do {
    eleccion1 = prompt(`${jugador1} elija piedra, papel o tijera:`);
    eleccion2 = prompt(`${jugador2} elija piedra, papel o tijera:`);
    if (eleccion1===eleccion2) {
        console.log("empate, jueguen otra vez. ")
    }else if(
        eleccion1 === "piedra" && eleccion2 === "tijeras" ||
        eleccion1 === "tijeras" && eleccion2 === "papel" ||
        eleccion1 === "papel" && eleccion2 === "piedra"
    ){
        console.log(`${jugador1} gana`)
        break;
    }else{
        console.log(`${jugador2} gana`)
        break;
    }
} while (true); */

// EJERCICIO 14
for (let i = 0; i <=5; i++) {
    console.log("*".repeat(i))
}

// EJERCICIO 15

for (let i = 5; i >=1; i--) {
    console.log("*".repeat(i))
}


// EJERCICIO 16

array1 = [3,7,2,1,6,8,4,9,10,5]

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length - i - 1; j++) {
        if (array1[j]>array1[j+1]) {
            let temp = array1[j]
            array1[j] = array1[j+1]
            array1[j+1]=temp
        }
    }
    
}

console.log(array1)
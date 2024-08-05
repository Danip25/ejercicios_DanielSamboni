
/* ejercicios de 1-5 */

const num = 2
const num1 = 1

if (num>num1) {
    console.log("el primer numero es mayor",num)
}else{
    console.log("null")
}


const num2 = 1
const num3 = 1

if (num2===num3) {
    console.log("los numeros son iguales",num2)
}else{
    console.log("los numeros son diferentes",num3)
}

const num4 = 1
const num5 = 2

if (num4>num5) {
    console.log("el primer numero es mayor",num4)
}

else if (num4<num5) {
    console.log("el primer numero no es mayor",num5)
}

else{
    console.log("los numeros son iguales")
}

const num6 = 3
const num7 = 4
const num8 = 1

if (num6<num7&&num6<num8) {
    console.log("el primer numero es menor",num6)
}else if (num7<num6 && num7<num8) {
    console.log("el segundo numero es menor",num7)
}else(console.log("el tercer numero es el menor",num8))


const persona = {
    nombre: "juan",
    edad: 22,
    altura: 160
}
const persona1 = {
    nombre: "jhon",
    edad: 23,
    altura: 170
}

if (persona.edad>persona1.edad) {
    console.log(persona.nombre,"es el mayor")
}else{console.log(persona1.nombre,"es el mayor")}

if (persona.altura>persona1.altura) {
    console.log(persona.nombre,"es el mas alto")
}else{console.log(persona1.nombre,"es el mas alto")}

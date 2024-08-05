let miNombre = prompt("¿Cuál es tu nombre?")
let miEdad = prompt("¿Cuál es tu edad?")
let miAltura = prompt("¿Cuál es tu altura?,digita tu altura en cm")
let miVision = prompt("¿Cuál es tu vision?,digita un valor de 1 a 10")

if (miEdad>=18&&miAltura>150&&miVision>=8) {
    console.log(miNombre,"eres apto para conducir")
}else{console.log("lo sentimos no puedes conducir")}
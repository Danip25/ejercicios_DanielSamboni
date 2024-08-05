
let edad = prompt("programa que te dice en que categoria de edad estas, ingresa tu edad")
if (edad < 100) {
    if (edad>=0 && edad<=12) {
        console.log("eres infante")
    }
    else if (edad>=13 && edad<=18){
        console.log("eres adolecente")
    }
    else if (edad>=19 && edad<=45){
        console.log("eres mayor joven")
    }else{console.log("eres anciano")}
}else{(console.log("esa es tu edad?"))}
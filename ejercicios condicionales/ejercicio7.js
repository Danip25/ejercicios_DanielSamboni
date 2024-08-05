let nombre = prompt("¿Cuál es tu nombre?")
let vip = prompt("tienes pase?,ingresa vip o normal")
let entrada = prompt("tienes entrada?ingresa true o false")
let usarentrada
let comprarentrada
let dinero
if (nombre=="Daniel" || vip=="vip") {
    console.log("bienvenid@")
}else if(entrada=="true"){
    usarentrada = prompt("quieres usar entrada?ingresa true o false")
    if (usarentrada=="true") {
        console.log("bienvenid@")
    }
}else if(entrada=="false"){
    comprarentrada = prompt("quieres comprar entrada?ingresa true o false")
    if (comprarentrada=="true") {
        dinero = prompt("cuanto tienes?")
        if (dinero>=1000) {
            console.log("compraste entrada, bienvenid@")
        }else{console.log("lo sientimos no te alcanza")}
    }else{console.log("que tengas buen dia")}
}else{console.log("para ingresar debes responder con las opciones preestablecidas D:")}
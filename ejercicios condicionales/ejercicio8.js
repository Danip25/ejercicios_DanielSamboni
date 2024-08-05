const numeroIncognita = 5
let numeroUsuario = prompt("Programa de adivinanza de un número, ingresa un número entre 1 y 10. Tienes 3 intentos")

if (numeroUsuario != numeroIncognita) {
    if (numeroUsuario < numeroIncognita) {
        numeroUsuario = prompt("El número ingresado es menor. Te quedan 2 intentos")
    } else {
        numeroUsuario = prompt("El número ingresado es mayor. Te quedan 2 intentos")
    }

    if (numeroUsuario != numeroIncognita) {
        if (numeroUsuario < numeroIncognita) {
            numeroUsuario = prompt("El número ingresado es menor. Te queda 1 intento")
        } else {
            numeroUsuario = prompt("El número ingresado es mayor. Te queda 1 intento")
        }

        if (numeroUsuario != numeroIncognita) {
            if (numeroUsuario < numeroIncognita) {
                console.log("El número ingresado es menor. Game over.")
            } else {
                console.log("El número ingresado es mayor. Game over.")
            }
        } else {
            console.log("¡Felicidades, adivinaste el número!")
        }
    } else {
        console.log("¡Felicidades, adivinaste el número!")
    }
} else {
    console.log("¡Felicidades, adivinaste el número!")
}
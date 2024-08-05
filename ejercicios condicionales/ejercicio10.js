let x = prompt("programa para jugar piedra papel o tijeras, jugador1 ingresa una de las opciones(piedra papel o tijeras)")
let y = prompt("jugador2 ingresa una de las opciones(piedra papel o tijeras)")
if (x||y=="piedra"||"papel"||"tijeras") {
    if (x!=y) {
        if (x == "piedra" && y == "papel") {
            console.log("jugador 2 gana")
        }else if(x == "piedra" && y == "tijeras"){
            console.log("jugador 1 gana")
        }else if(x == "papel" && y == "piedra"){
            console.log("jugador 1 gana")
        }else if(x == "papel" && y == "tijeras"){
            console.log("jugador 2 gana")
        }else if(x == "tijeras" && y == "piedra"){
            console.log("jugador 2 gana")
        }else{console.log("jugador 1 gana")}
    }else{console.log("empate")}
}else{console.log("estas haciendo trampa")}


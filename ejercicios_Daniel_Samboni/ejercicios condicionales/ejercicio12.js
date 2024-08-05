let num = prompt("calculadora, ingresa un numero")
let num1 = prompt("calculadora, ingresa el segundo numero")
let op = prompt("elige la operacion, (division, multiplicacion, suma o resta")
let suma =  parseInt(num)+ parseInt(num1)
let resta =  parseInt(num)- parseInt(num1)
let multi =  parseInt(num)* parseInt(num1)
let div=  parseInt(num)/ parseInt(num1)

if (op == "suma") {
    console.log( suma)
}else if (op == "resta"){
    console.log(resta)
}else if(op== "multiplicacion"){
    console.log(multi)
}else if (op == "division"){
if (num1!=0) {
    console.log(div)
}else{console.log(div)}
}else{}
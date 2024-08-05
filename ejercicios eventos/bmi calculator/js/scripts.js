const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const result = document.getElementById('result');
const form = document.getElementById('form');

const calculateBMI = (peso, altura) => peso / (altura * altura)

const setResult = (bmi) => {
    result.innerText = bmi.toFixed(2)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const pesoValue = peso.value
    const alturaValue = altura.value
    const bmi = calculateBMI(pesoValue, alturaValue)
    setResult(bmi)
})
const copInput = document.getElementById('cop');
const usdInput = document.getElementById('usd');

const convertToUsd = (cop) => cop / 4000
const convertToCop = (usd) => usd * 4000

copInput.addEventListener('input', (e) => {
    const cop = e.target.value
    usdInput.value = convertToUsd(cop)
})


usdInput.addEventListener('input', (e) => {
    const usd = e.target.value
    copInput.value = convertToCop(usd)
})
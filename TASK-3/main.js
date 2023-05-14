let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')
let romerInput = document.querySelector('#romer > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin and rankine and romer */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp*1.8) + 491.67
    let oTemp = (cTemp*0.52500) + 7.50

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
    romerInput.value = roundNumber(oTemp)
})


/* Fahrenheit to Celcius and Kelvin and rankine and romer*/
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15
    let rTemp = fTemp + 491.67
    let oTemp = ((fTemp-32)*0.29100) + 7.50

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
    romerInput.value = roundNumber(oTemp)
})

/* Kelvin to Celcius and Fahrenheit and rankine and romer */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32
    let rTemp = kTemp * 1.8
    let oTemp = ((kTemp - 273.15)* 0.52500) + 7.50
    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    rankineInput.value = roundNumber(rTemp)
    romerInput.value = roundNumber(oTemp)
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    rankineInput.value = ""
    romerInput.value = ""
})
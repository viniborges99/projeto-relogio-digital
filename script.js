const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

const relogio = setInterval(function time (){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()
    let day = dateToday.getDate()
    let month = dateToday.getMonth()
    let year = dateToday.getFullYear()
    
    if(hr < 10){
        hr = '0'+hr
    } else if (min < 10){
        min = '0'+min
    }else if (seg < 10){
        seg= '0'+ seg
    }
    

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent= seg
    dia.textContent = day
    mes.textContent = month+1
    ano.textContent = year


})
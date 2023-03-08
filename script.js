let miniBox = document.getElementById('mini-box')
let button = document.getElementById('button')
let lampada = document.querySelector('img')
const body = document.body

miniBox.addEventListener("click", onOff)

function turnLampOff() {
    button.classList.remove('on')
    button.classList.add('off')

    lampada.src = './assets/ligada.jpg'
    body.style.background = "white"
} 
function turnLampOn() {
    button.classList.remove('off')
    button.classList.add('on')
    lampada.src = 'assets/desligada-removebg-preview.png'
    
    body.style.background = "black"
}

function onOff() {
    if (lampada.classList.contains('quebrada')){
        return
    } else if (button.classList.contains('on')){
       turnLampOff()
    } else {
        turnLampOn()
    }
} 
lampada.addEventListener('dblclick', quebrar)

function quebrar() {    
    lampada.src = './assets/quebrada-removebg-preview.png'
    lampada.classList.add('quebrada')
    body.style.background = "black"    
}

lampada.addEventListener("mouseover", mouseIn)

function mouseIn (){
    if (lampada.classList.contains('quebrada')) {
        return
    } else if (button.classList.contains('on')) {
        turnLampOff()
    }    
}
lampada.addEventListener("mouseleave", mouseOut)

function mouseOut() {
    if (lampada.classList.contains('quebrada')) {
        return
    } else if (button.classList.contains('off')) {
        turnLampOn()
    }
}
let miniBox = document.getElementById('mini-box')
let button = document.getElementById('button')
let lampada = document.querySelector('img')
const body = document.body

miniBox.addEventListener("click", onOff)

function onOff() {
    if (lampada.classList.contains('quebrada')){
        return
    } else if (button.classList.contains('on')){
        button.classList.remove('on')
        button.classList.add('off')

        lampada.setAttribute('src', './assets/ligada.jpg')  
        body.style.background = "white"

    } else {
        button.classList.remove('off')
        button.classList.add('on')
        lampada.setAttribute('src', 'assets/desligada-removebg-preview.png')
        
        body.style.background = "black"
    }
} 
lampada.addEventListener('dblclick', quebrar)

function quebrar() {    
    lampada.setAttribute('src', './assets/quebrada-removebg-preview.png')
    lampada.classList.add('quebrada')
    body.style.background = "black"    
}

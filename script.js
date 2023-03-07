let miniBox = document.getElementById('mini-box')
let button = document.getElementById('button')
let lampada = document.querySelector('img')

miniBox.addEventListener("click", onOff)

function onOff() {

    if(button.classList.contains('on')){
        button.classList.remove('on')
        button.classList.add('off')

        lampada.setAttribute('src', './assets/ligada.jpg')     

    } else {
        button.classList.remove('off')
        button.classList.add('on')
        lampada.setAttribute('src', './assets/desligada.jpg')

}
} 
lampada.addEventListener('dblclick', quebrar)

function quebrar() {    
    lampada.setAttribute('src', './assets/quebrada.jpg')
    lampada.classList.add('quebrada')

    if (lampada.classList.contains('quebrada')) {

         
    } else {
        miniBox.addEventListener("click", onOff)
        
    }

    
}

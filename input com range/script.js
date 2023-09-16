
window.addEventListener('load',()=>{
    inputColor();   
});

function inputColor(){

    let r = parseInt(document.querySelector('#inputRed').value);  
    let g = parseInt(document.querySelector('#inputGreen').value);
    let b = parseInt(document.querySelector('#inputBlue').value);
    
    let div = document.querySelector('.displayColor');  
    div.style.background = `rgb(${r},${g},${b})`;

}


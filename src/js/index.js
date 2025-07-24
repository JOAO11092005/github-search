import api from '../scripts/api.js'
const repositorio = document.querySelector('.comites');
const usuarioDigitado = document.querySelector('input');
document.querySelector('.search-button').addEventListener('click', () => {
    

    if(usuarioDigitado.value){
        repositorio.innerHTML = ''
        api(usuarioDigitado.value)
    }else{
        alert('Digite o seu usuario')
    }
})

usuarioDigitado.addEventListener('keyup', (enter) => {
   const key = enter.keyCode

   if(key === 13){
     if(usuarioDigitado.value){
        repositorio.innerHTML = ''
        api(usuarioDigitado.value)
    }else{
        alert('Digite o seu usuario')
    }
   }
})
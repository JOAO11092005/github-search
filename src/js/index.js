import api from '../scripts/api.js'
const usuarioDigitado = document.querySelector('input');
document.querySelector('.search-button').addEventListener('click', () => {
    api(usuarioDigitado.value)
})

usuarioDigitado.addEventListener('keyup', (enter) => {
   const key = enter.keyCode

   if(key === 13){
     api(usuarioDigitado.value)
   }
})
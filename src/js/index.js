import token from './token.js'
const imagemPerfil = document.querySelector('.perfil-do-usuario');
const titulo = document.querySelector('h1');
const bio = document.querySelector('.biografia');
const idDoUsuario = document.querySelector('.id-do-usuario')
let valorDigitado = document.querySelector('input');

document.querySelector('.search-button').addEventListener('click', function () {
  let nome = valorDigitado.value
  user(nome).then((data => {
    atualizar(data)
  }))


})
async function user(nomeDeUsuario) {
  const response = await fetch(`https://api.github.com/users/` + nomeDeUsuario, {
    headers: {
      "Authorization": `${token}`
    }
  })




  return await response.json()
}

function atualizar(dados) {
  console.log('dados :' + dados.avatar_url)

  imagemPerfil.src = dados.avatar_url;
  titulo.innerText = dados.name;
  bio.innerText = dados.bio;
  idDoUsuario.innerText = `ID : ${dados.id}`
  document.querySelector('.seguidoresNoGit').innerText = `Seguindo: ${dados.following
    }`
  document.querySelector('.seguindoNoGit').innerText = `Seguidores: ${dados.followers}`
}

console.log(user('JOAO11092005'))
console.log(user('JOAO11092005').then(data => {
  console.log(data.avatar_url)
}))


user('crunchyroll').then((data => {
    atualizar(data)
  }))
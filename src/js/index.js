import token from './token.js'
const imagemPerfil = document.querySelector('.perfil-do-usuario');
const titulo = document.querySelector('h1');
const bio = document.querySelector('.biografia');
const idDoUsuario = document.querySelector('.id-do-usuario')
let valorDigitado = document.querySelector('input');
const comites = document.querySelector('.comites');
document.querySelector('.search-button').addEventListener('click', function () {
  comites.innerHTML = ''
  let nome = valorDigitado.value
  exibirLink(nome)
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

async function exibirLink(usuarioGithub){
  const link = await fetch(`https://api.github.com/users/${usuarioGithub}/repos`)
   const result = await link.json() 
  
   for(let i = 0 ; i <= 5; i++){
    console.log(result[i]['name']);
    const commits = [''];

    commits.push(result[i]['name'])
    criaCommit(result[i]['name'])
    // document.querySelector('.comites').innerHTML = `
    // <div class="commit-ativo">
    //    ${result[i]['name']}
    // </div>`;


    console.log(commits);
   }
}


// user('crunchyroll').then((data => {
//     atualizar(data)
//   }))


function criaCommit(commitGithub){
    const commit = document.createElement('div');
    commit.innerHTML = commitGithub;
    
    commit.classList.add('commit-ativo');
    comites.appendChild(commit);
}


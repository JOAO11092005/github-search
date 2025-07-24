const repositorio = document.querySelector('.comites');

async function recebeRepos_Url(link) {
    const url = await fetch(link)

    const result = await url.json()

    for (let contador = 0; contador <= 5; contador++) {
          criaRepositori(result[contador]['name'])
    }
}



function criaRepositori(valor) {
    const divRepo = document.createElement('div');
    divRepo.innerText = valor
    divRepo.classList.add('commit-ativo')
    repositorio.appendChild(divRepo)
}
export default recebeRepos_Url
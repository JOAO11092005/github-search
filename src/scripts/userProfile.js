
function atualizarPerfil(nome, bio, imagemPerfil , seguindo , seguidores) {
    const perfil = document.querySelector('.perfil')
    perfil.innerHTML = `
            <img src="${imagemPerfil ?? './src/img/sem-perfil.jpg'}" alt="Imagem do perfil do github" class="perfil-do-usuario">
            
            <h1>${nome ?? 'Nome Indisponivel'}</h1>


            <p class="biografia">${bio ?? 'Bio Indisponivel'}</p>

            <p class="id-do-usuario">#2025</p>
    `

    const social = document.querySelector('.social').innerHTML = 
    `
                    <div class="seguidores">
                    <i class="fa-solid fa-user" aria-hidden="true"></i> 
                    <div class="seguidoresNoGit">Seguindo:${seguindo ?? ' Indisponivel'}</div>
                    </div>


                    <div class="seguindo">
                    <i class="fa-regular fa-user" aria-hidden="true"></i>
                    <div class="seguindoNoGit">Seguidores:${seguidores ?? ' Indisponivel'}
                        </div>
                     </div>
    `
}



function estruturaUsuario(nomeProfile, bioProfile, imagemProfile, seguindoProfiles , seguidores) {
    const user = {
        nome: nomeProfile,
        bio: bioProfile,
        imagemPerfil: imagemProfile,
        seguindo: seguindoProfiles,
        seguidores: seguidores,
    }

    atualizarPerfil(user.nome , user.bio , user.imagemPerfil , user.seguindo , user.seguidores)
    // console.log(user)
}
// console.log(estruturaUsuario)
export default estruturaUsuario;
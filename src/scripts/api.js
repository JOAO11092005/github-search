import token from './token.js'
import estruturaUsuario from './userProfile.js'
import commit from './commits.js'
async function api(userName) {
    const urlApi = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
            Authorization: `${token}`
        }
    });
    const convertApi = await urlApi.json()
    // console.log(await convertApi)

    estruturaUsuario(convertApi['name'],convertApi['bio'], convertApi['avatar_url'], convertApi['followers'] , convertApi['following'])
    
   
    commit(convertApi['repos_url'])
    
    return await convertApi;
}

export default api
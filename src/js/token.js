async function resultToken(){
    const resultTokenGithub = await fetch('src/js/json/token.json');

    const json = await resultTokenGithub.json()

    // console.log(await json)
}

// console.log(resultToken())

const token = resultToken().then((db) => {
});
export default token


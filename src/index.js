const apiKey = 'V7tQtILizStMNpJ2N29rutdPskshvCMT';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => {
    console.log(resp);
})
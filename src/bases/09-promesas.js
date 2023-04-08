import { getHeroeById } from './bases/08-export-default-import'

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const hero = getHeroeById(id);
        if(hero) {
            resolve(hero);
        } else {
            reject("No se Puedo Encontrar el heroe");
        }
        }, 2000 );
    });
}

getHeroeByIdAsync(1)
.then( console.log )
.catch( console.warn );
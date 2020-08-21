const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/';

const otraFuncion = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const personaje = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(personaje.origin.url);

        console.log(data.info.count);
        console.log(personaje.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
otraFuncion(API);
console.log('After')
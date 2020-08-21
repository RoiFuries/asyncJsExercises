const somethingWillHappen = () => {
    return new Promise((resolve1, reject1)=>{ // aqui donde dice resolve no importa el valor sigue funcionando
        if(true){
            resolve1('hey thats correct instant');
        } else {
            reject1('Wooooops, sorry dude')
        }
    });
};

somethingWillHappen()
.then(cualquierCosa => console.log(cualquierCosa))
.catch(otraCualquierCosa => console.error(otraCualquierCosa));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() =>{
                resolve('that is true in 2s');
            }, 2000)
        } else {
            const error = new Error('whooooops niga cagandola desde 1992'); //esto ayuda a hacer un mejor debbuging
            reject(error);
        }
    });
}
somethingWillHappen2()
.then(response => console.log(response))
.catch(errd => console.error(errd))
/////////////


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('array of results', response);
})
.catch(err => {
    console.error(err);
})

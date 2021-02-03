import data from './data/rickandmorty/rickandmorty.js';
let characters = data.results;
let characterName = characters.name;
console.log(characters.name)


    //filttrado por nombre
const formulario = document.querySelector("#buscador");
const boton = document.querySelector("#botonBusqueda");
const resultadoNom = document.querySelector("#container-characters")

const filtrarBuscador = () =>{

    resultadoNom.innerHTML="";

   const texto = formulario.value.toLowerCase();
    
   for (let character of characters){
       console.log(character);

        let nombre = character.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultadoNom.innerHTML +=`
            <div class="card">
                <div>
                    <img class="characterImage" src=${character.image}></img>
                </div>
                <div class="status">
                    <P>STATUS:</P><P>${character.status}</P>
                </div>
                <div class="boxName">
                    <H2 class="name">${character.name}</H2>
                    <p> <b> SPECIES:</b> ${character.species}</p>
                    <p> <b> GENDER:</b> ${character.gender}</p>
                    <p> <b> ORIGIN:</b> ${character.origin.name}</p>    
                </div>
            </div>`
        }
    }
    if(resultadoNom.innerHTML === ""){
        resultadoNom.innerHTML += `
        <h1> no encontrado </h1>
        `
    }
}
    
boton.addEventListener('click', filtrarBuscador)
    
    //filtrado por nombre
import data from './data/rickandmorty/rickandmorty.js';
import {filtrarRenderizar, filtrarBuscador} from "./data.js"
import {botonesObj} from "./botObj.js";

export let characters = data.results; 
let container = document.getElementById("container-characters");
let html = "";
let showAll = document.getElementById("showall");

export const boton = document.querySelector("#botonBusqueda");
export const formulario = document.querySelector("#buscador");
export const resultadoNom = document.querySelector("#container-characters")

const botonOrderAZ = document.querySelector('.order');
const botonOrderZA = document.querySelector('.order2');


export function createCard(character) {

    const card =
    `
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
    
    </div>
      
    `
    return card;
}
function renderCards() {

    characters.forEach( e => html += createCard(e)); 
    container.innerHTML = html;

}

renderCards();
//ESTA PARTE ES LA DEL FILTRADO:

    //this code show all th Data
    
        
    showAll.addEventListener("click",function(){
        renderCards()

    });


    boton.addEventListener('click', filtrarBuscador)

    //This code make the filter
    filtrarRenderizar(botonesObj);


botonOrderAZ.addEventListener("click",function(){
   
        const orderAZ =characters.sort(function(a,b){
        html="";
        
        if(a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        return 0
    });
orderAZ.forEach((e)=> html+= createCard(e))
document.querySelector("#container-characters").innerHTML=html
});  

botonOrderZA.addEventListener("click",function(){
   
        const orderZA =characters.sort(function(a,b){
        html="";
        
        if(a.name < b.name){
            return 1;
        }
        if(a.name > b.name){
            return -1;
        }
        return 0
    });
    orderZA.forEach((e)=> html+= createCard(e))
    document.querySelector("#container-characters").innerHTML=html
});

import data from './data/rickandmorty/rickandmorty.js';
import { filterGender, filterStatus } from './data.js'

export let characters = data.results;
export let container = document.getElementById("container-characters");
export let html = "";

let botonOrder = document.querySelector(".orderAZ");
let botonOrder2 = document.querySelector(".orderZA");

//VARIABLES DE MIS BOTONES DE FILTRADO
const genderButtons = document.querySelectorAll('.genderButton');
const statusButtons = document.querySelectorAll('.statusButton');
const speciesButtons = document.querySelectorAll('.specieButton');

console.log('buttons', statusButtons);
//TEMPLATE LITERALS
function createCard(character) {

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
};


//MOSTRANDO DATA:
function renderCards() {
    characters.forEach( e => html += createCard(e)); 
    container.innerHTML = html;
};
renderCards()
//console.log(characters.name[0])

statusButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        filterStatus(button.id)
    });
})


genderButtons.forEach(function (button) {
    button.addEventListener('click', function(event) {
        const value = event.target.dataset.gender
        console.log("value", value, event.target.dataset)
        filterGender(value)
    })
})

speciesButtons.forEach(function (button) {
    button.addEventListener('click', function(event) {
        const value = event.target.dataset.specie
        filterSpecies(value)
    })
})

   
       
 

    //this code show all th Data
    /*let showAll = document.querySelector("#showall");      
    showAll.addEventListener("click",function(){
        renderCards()
    }); */
    
botonOrder.addEventListener("click",function(){
   
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

botonOrder2.addEventListener("click",function(){
   
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

import data from './data/rickandmorty/rickandmorty.js';
let characters = data.results;
let container = document.getElementById("container-characters");
let html = "";
let botonOrder = document.querySelector(".order")


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
}
function renderCards() {

    characters.forEach( e => html += createCard(e)); 
    container.innerHTML = html;

}

renderCards();
//ESTA PARTE ES LA DEL FILTRADO:

    //this code show all th Data
    let showAll = document.getElementById("showall");
        
    showAll.addEventListener("click",function(){
        renderCards()

    });


    import {botonesObj} from "./botObj.js";

    function filtrarRenderizar(objetStatus){
        objetStatus.forEach(boton=>{
            let botonId= document.getElementById(boton.id);
            //console.log('********');
            //console.log(boton,botonId);
        
            botonId.addEventListener('click', ()=>{
                //console.log('CLICK');
                let container2 = document.getElementById("container-characters");
                let html2 = ""
                //console.log( boton.status);
                
                //let statusFilter = characters.filter(character =>character[boton.type] == boton.status)
                 let statusFilter = characters.filter(character =>{

                     switch (boton.type) {

                     case 'status':
                            
                     return character.status == boton.status

                     case 'gender':
                            
                     return character.gender == boton.status

                     case 'species':
                            
                     return character.species == boton.status

                    }
                    
                 });
  

                //console.log(statusFilter);
                    statusFilter.forEach((character) => html2 += createCard(character));
                    container2.innerHTML=html2;
            }
            );
        })

    }
    filtrarRenderizar(botonesObj);




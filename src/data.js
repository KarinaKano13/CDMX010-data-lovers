import data from './data/rickandmorty/rickandmorty.js';
import { characters, createCard, formulario, resultadoNom} from './main.js'

    //filttrado por nombre


export const filtrarBuscador = () =>{

    resultadoNom.innerHTML="";

   const texto = formulario.value.toLowerCase();
    
   for (let character of characters){
       
        let nombre = character.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultadoNom.innerHTML +=
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
            </div>`
        }
    }
    if(resultadoNom.innerHTML === ""){
        resultadoNom.innerHTML += `
        <h1> no encontrado </h1>
        `
    }
}
    

    
    //filtrado por nombre

export function filtrarRenderizar(objetStatus){
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
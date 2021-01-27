
import data from './data/rickandmorty/rickandmorty.js';
let characters = data.results;
let container = document.getElementById("container-characters");
let html = "";
let botonOrder = document.querySelector(".order")

//console.log(characters.name[0])

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

/*
    botonOrder.addEventListener("click",function(){

        console.log("probando")
        console.log(html.name);

    }

    )
*/

    renderCards();
    //ESTA PARTE ES LA DEL FILTRADO:
    //filtrado por gender Female .....



    //this code show all th Data
    let showAll = document.getElementById("showall");
        
    showAll.addEventListener("click",function(){
        renderCards()

    });

    //This Code filter by gender

    const botonFemmale = document.getElementById("femaleOption");
        
        botonFemmale.addEventListener('click', function(){

            let container = document.getElementById("container-characters");
            let html = ""
             

            const filter = characters.filter(character => character.gender === "Female");
                    
                filter.forEach((character) => html += createCard(character));

            container.innerHTML=html;
                       
        }
    );

    let botonMale = document.getElementById("MaleOption");
        
        botonMale.addEventListener('click', function(){

            let container = document.getElementById("container-characters");
            let html = ""
            


            const filter = characters.filter(character => character.gender === "Male");
            filter.forEach((character) => html += createCard(character)); 

            container.innerHTML=html; 
            
            /*
            const results = genderFilter.length; 
            let element = document.createElement("p")
            element.textContent = `${results} characters in this category`
            const nav = document.querySelector("#element");
            nav.appendChild(element);
            
            console.log(genderFilter.length)*/
                    
        }
    );

    let botonUnnknown = document.getElementById("unknownOption");
        
        botonUnnknown.addEventListener('click', function(){

            let container = document.getElementById("container-characters");
            let html = ""
    
            const genderFilter = characters.filter(character => character.gender === "unknown");
                
                genderFilter.forEach((character) => html += createCard(character));

            container.innerHTML=html;
                    
        }
    );

//This Code filter by Species

    let botonHumanSpecies = document.getElementById("humanOption");
    
    botonHumanSpecies.addEventListener('click', function(){

        let container = document.getElementById("container-characters");
        let html = ""
        
        const speciesFilter = characters.filter(character => character.species === "Human");
            
            speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;   
        
        
    });
    let botonalienOption = document.querySelector('#alienOption');

    botonalienOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Alien")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonhumanoidOption = document.querySelector('#humanoidOption');

    botonhumanoidOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Humanoid")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonunknowOption = document.querySelector('#unknowOption');

    botonunknowOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "unknown")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonmythologyOption = document.querySelector('#mythologyOption');

    botonmythologyOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Mytholog")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonanimalOption = document.querySelector('#animalOption');

    botonanimalOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Animal")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonvampireOption = document.querySelector('#vampireOption');

    botonvampireOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Vampire")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonrobotOption = document.querySelector('#robotOption');

    botonrobotOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Robot")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botoncronenbergOption = document.querySelector('#cronenbergOption');

    botoncronenbergOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Cronenberg")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botondiseasseOption = document.querySelector('#diseasseOption');

    botondiseasseOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Disease")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    let botonparasiteOption = document.querySelector('#parasiteOption');

    botonparasiteOption.addEventListener('click',function(){

        let container = document.getElementById("container-characters");
        let html = ""

        const speciesFilter = characters.filter((character) => character.species === "Parasite")
        speciesFilter.forEach((character) => html += createCard(character));

        container.innerHTML=html;

    });

    /*
    function getOrigins(characters) {
        const origins = characters.map((character) => {
            return character.origin.name
        }); // ['earth', 'marte', ...]

        const originSet = new Set(origins);

        return  Array.from(originSet);
       
    };

    getOrigins()
    */





// Función para ordenar Alfabeticamente:
//
/*let order = document.getElementsByClassName("order");

    order.addEventListener*/

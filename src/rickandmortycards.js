
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
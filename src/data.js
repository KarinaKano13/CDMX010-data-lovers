import {characters, container, html} from './main.js'


export function filterStatus(value){
    
    
    if (value === "Alive") {
        const filter = characters.filter((character) => character.status === value)
        console.log(filter)         
        return filter
    }
    if (value === "Dead"){
        const filter = characters.filter((character) => character.status === value)
        console.log(filter)     
        return filter
    }
};

export function filterGender(value){
    
    if (value === "Female") {
        const filter = characters.filter((character) => character.gender === value)
        console.log(filter) 
        return filter
                  
    }
    if (value === "Male"){
        const filter = characters.filter((character) => character.gender === value)
        console.log(filter)  
        return filter         
    }
    if(value === "unknown"){
        const filter = characters.filter((character) => character.gender === value)
        console.log(filter)
        return filter
    } 

}

export function filterSpecies(value){
    
    if (value === "Human") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
        
    }if (value === "Alien"){
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if (value === "Humanoid") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if (value === "unknown") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if (value === "Mytholog") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Animal") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Vampire") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Robot") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Cronenberg") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Disease") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Parasite") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter
    }if(value === "Poopybutthole") {
        const filter = characters.filter((character) => character.species === value)
        console.log(filter)
        return filter}
}

import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

export let people = [
    {
        id : 0,
        name: 'jinyeong0',
        age: 25,
        gender: 'male'
    }, {
        id : 1,
        name: 'jinyeong1',
        age: 25,
        gender: 'male'
    }, {
        id : 2,
        name: 'jinyeong2',
        age: 25,
        gender: 'male'
    }
]

export const getById = (id) =>{
    const filteredPeople = people.filter(person => id === person.id)
    return filteredPeople[0]
}

export const deleteById = (id) =>{
    const cleanedPeople = people.filter(person => id !== person.id)
    if ( people.length > cleanedPeople.length){
        people = cleanedPeople
        return true
    }else{
        return false
    }
}

export const addPserson = (name,age)=>{
    const newPerson = {
        id : `${people.length+1}`,
        name,
        age
    }
    people.push(newPerson)
    return newPerson
}
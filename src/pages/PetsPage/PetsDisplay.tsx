import React, { useState, useEffect } from 'react'
import Styled from './styles'
import PetCard from './PetCard'

export type Pet = {
    name: string;
    species: string;
    breed: string;
    age: number;
    daysInShelter: number;
    adorableness: number;
    imageUrl: string;
}

const petData: Pet[] = [
    {
        name: "Spot",
        species: "dog",
        breed: "Weiner",
        age: 4,
        daysInShelter: 30,
        adorableness: 9,
        imageUrl: "https://cdn.akc.org/dachshund-bear-cover.jpg",
    },
    {
        name: "Buster",
        species: "dog",
        breed: "Fuzzy",
        age: 7,
        daysInShelter: 90,
        adorableness: 7,
        imageUrl: "https://s3.amazonaws.com/playbarkrun/wp-content/uploads/2018/10/02124018/Coton-De-Tulear.jpg",
    },
    {
        name: "Yogi",
        species: "dog",
        breed: "Shitzu/Chihuahua/Chow Mix",
        age: 5,
        daysInShelter: 30,
        adorableness: 10,
        imageUrl: "https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2018/08/golden-retriever-corgi-mix-1.jpg",
    },
]

const PetsDisplay = () => {

    const [ pets, setPets ] = useState<Pet[]>([]);

    useEffect(() => {

        // TODO: add the database call here
        setPets(petData);
    },[])

    return (
        <Styled.PetsDisplay>
            {pets.map((pet, idx) => <PetCard key={idx} pet={pet} />)}
        </Styled.PetsDisplay>
    )
}

export default PetsDisplay

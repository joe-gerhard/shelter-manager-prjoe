import React, { useState } from 'react'
import Styled from './styles'
import { db } from '../../util/firebase'
import { Pet } from './types'

const defaultData: Pet = {
    name: '',
    species: '',
    breed: '',
    age: 1,
    daysInShelter: 1,
    adorableness: 10,
    imageUrl: '',
    id: '',
}

const AddPetForm = () => {

    const [ open, setOpen ] = useState<boolean>(false);
    const [ form, setForm ] = useState<Pet>(defaultData)

    const handleSubmit = () => {
        db.collection('pets').add(form)
        .then(response => {
            console.log(`document added with id ${response.id}`)
        }).catch(error => {
            console.log(error)
        })

        setForm(defaultData)
        setOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSetOpen = () => {
        // TODO: if(open) scroll form back to the top
        setOpen(!open)
    }

    return (
        <Styled.AddPetForm open={open}>
            <div>
                <Styled.Button open={open} onClick={handleSetOpen}>{open ? "CANCEL" : "ADD A PET"}</Styled.Button>
                <Styled.SubmitButton open={open} onClick={handleSubmit}>SUBMIT</Styled.SubmitButton>
            </div>
            <Styled.Label htmlFor="name" open={open}>Name:
                <Styled.Input onChange={handleChange} open={open} value={form.name} id="name" name="name" type="text"/>
            </Styled.Label>
            <Styled.Label htmlFor="species" open={open}>Species:
                <Styled.Input onChange={handleChange} open={open} value={form.species} id="species" name="species" type="text"/>
            </Styled.Label>
            <Styled.Label htmlFor="breed" open={open}>Breed:
                <Styled.Input onChange={handleChange} open={open} value={form.breed} id="breed" name="breed" type="text"/>
            </Styled.Label>
            <Styled.Label htmlFor="age" open={open}>Age:
                <Styled.Input onChange={handleChange} open={open} value={form.age} id="age" name="age" type="number"/>
            </Styled.Label>
            <Styled.Label htmlFor="daysInShelter" open={open}>Days In Shelter:
                <Styled.Input onChange={handleChange} open={open} value={form.daysInShelter} name="daysInShelter" type="number"/>
            </Styled.Label>
            <Styled.Label htmlFor="adorableness" open={open}>Adorableness:
                <Styled.Input onChange={handleChange} open={open} value={form.adorableness} name="adorableness" type="number"/>
            </Styled.Label>
            <Styled.Label htmlFor="imageUrl" open={open}>Image URL:
                <Styled.Input onChange={handleChange} open={open} value={form.imageUrl} id="imageUrl" name="imageUrl" type="text"/>
            </Styled.Label>
        </Styled.AddPetForm>
    )
}

export default AddPetForm

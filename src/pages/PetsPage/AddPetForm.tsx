import React, { useState } from 'react'
import Styled from './styles'
import { Pet } from './PetsDisplay'
import { db } from '../../util/firebase'

const defaultData: Pet = {
    name: '',
    species: '',
    breed: '',
    age: 0,
    daysInShelter: 0,
    adorableness: 0,
    imageUrl: '',
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

    return (
        <Styled.AddPetForm open={open}>
            <div>
                <Styled.Button open={open} onClick={() => setOpen(!open)}>{open ? "CANCEL" : "ADD A PET"}</Styled.Button>
                <Styled.SubmitButton open={open} onClick={handleSubmit}>SUBMIT</Styled.SubmitButton>
            </div>
            <Styled.Input onChange={handleChange} open={open} value={form.name} name="name" type="text" placeholder="name"/>
            <Styled.Input onChange={handleChange} open={open} value={form.species} name="species" type="text" placeholder="species"/>
            <Styled.Input onChange={handleChange} open={open} value={form.breed} name="breed" type="text" placeholder="breed"/>
            <Styled.Input onChange={handleChange} open={open} value={form.age} name="age" type="number" placeholder="age"/>
            <Styled.Input onChange={handleChange} open={open} value={form.daysInShelter} name="daysInShelter" type="number" placeholder="days in shelter"/>
            <Styled.Input onChange={handleChange} open={open} value={form.adorableness} name="adorableness" type="number" placeholder="adorableness"/>
            <Styled.Input onChange={handleChange} open={open} value={form.imageUrl} name="imageUrl" type="text" placeholder="imageUrl"/>
        </Styled.AddPetForm>
    )
}

export default AddPetForm

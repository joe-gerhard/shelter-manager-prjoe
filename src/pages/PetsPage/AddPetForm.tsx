import React, { useState } from 'react'
import Styled from './styles'

const AddPetForm = () => {

    const [ open, setOpen ] = useState<boolean>(false);

    const handleSubmit = () => {
        // TODO: Add handle submit logic
    }

    return (
        <Styled.AddPetForm open={open}>
            <div>
                <Styled.Button open={open} onClick={() => setOpen(!open)}>{open ? "CANCEL" : "ADD A PET"}</Styled.Button>
                <Styled.SubmitButton open={open} onClick={handleSubmit}>SUBMIT</Styled.SubmitButton>
            </div>

            <Styled.Input open={open} type="text" placeholder="name"/>
            <Styled.Input open={open} type="text" placeholder="species"/>
            <Styled.Input open={open} type="text" placeholder="breed"/>
            <Styled.Input open={open} type="text" placeholder="age"/>
            <Styled.Input open={open} type="text" placeholder="days in shelter"/>
            <Styled.Input open={open} type="text" placeholder="adorableness"/>
        </Styled.AddPetForm>
    )
}

export default AddPetForm

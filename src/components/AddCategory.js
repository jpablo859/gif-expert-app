import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({categorias, setCategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = e => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const res = categorias.find(item => item === inputValue);

        if(res) {
            alert('Ya existe');
            return
        }

        if(inputValue.trim().length > 2) {
            setCategorias([inputValue,...categorias]);
            setInputValue('');
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    categorias: PropTypes.array.isRequired,
    setCategorias: PropTypes.func.isRequired
    // mensaje: PropTypes.string.isRequired
}

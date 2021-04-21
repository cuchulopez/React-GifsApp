import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const escriba = 'Escriba aquí.';
    const [inputValue, setInputValue] = useState(escriba);

    const handleClear = () =>{
        if (inputValue === escriba) {
            setInputValue('');            
        }
    };

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategorias(categs => [ inputValue,...categs]);
            setInputValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onClick = {handleClear}
                onChange = {handleInputChange}
            />
        </form>
    );
};

AddCategory.protoType = {
    setCategorias: PropTypes.func.isRequired
};
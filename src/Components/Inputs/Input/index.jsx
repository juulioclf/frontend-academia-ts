import React from "react";
import { InputS } from './styles'

const Input = ({
    name,
    placeholder,
    onChange,
    type
}) => {
    return(
        <InputS 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    );
}

export default Input;
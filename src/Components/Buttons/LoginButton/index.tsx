import React from 'react';
import { Button } from './styles'

const BotaoLogin = ({
    type,
    text,
    onClick,
    disabled,
}: any) => {
    return(
        <Button
        type={type}
        value={text}
        onClick={onClick}
        disabled={disabled}>    
            {text}
        </Button>
    );
}

export default BotaoLogin;
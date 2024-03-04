import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    margin-top: 1em;

    ${props => props.disabled === false &&`
        &:hover {
            background-color: #FFF;
            color: #6a6a6a;
        }
    ` }

    ${props => props.disabled &&`
        opacity: 0.7;
    `}
`
import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
`;

export const TextAbout = styled.div`
    position: absolute;
    top: 70%;
    left: 38%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: var(--branco);

    h1 {
        position: relative;
        max-width: 60%;
        font-size: 2em;
        font-family: var(--fonte);
        text-shadow: 2px 2px 4px black;

    }

    strong {
        color: var(--amarelo)
    }

`;

export const TextSide = styled.div`
    margin: 0em 0em 1em 2.5em;
    font-size: 30px;
    font-family: var(--fonte);
    width: 40%;
    color: var(--branco);
    text-shadow: 2px 2px 4px black;
`;

export const ImageText = styled.div`
    margin-top: 5em;
    position: relative;

    img {
        width: 100%;
        height: 500px;
    }

`;

export const Cadastro = styled.div`
    background-color: var(--amarelo);
    width: 40%;
    border-radius: 20px;
    padding: 1em;

    input {
        width: 90%;
        padding: 1em;
        margin: 1em;
        border-radius: 20px;
        border: none;
    }

    input::placeholder {
        font-family: var(--fonte);
        font-size: 15px;
        color: black;
    }

`;

export const Contatos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--branco);
    width: 42%;
    font-family: var(--fonte);
    font-size: 16px;

`;

export const Icone = styled.div`
    display: flex;
    align-items: center;
`;
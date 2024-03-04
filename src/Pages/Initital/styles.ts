import styled from "styled-components";
import Woman from "../../Assets/images/woman.png";
import Deadlift from "../../Assets/images/deadlift.png"

interface TextAboutProps {
    isMaxWidth?: boolean;
}

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url(${Woman});
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    overflow: hidden;
    align-items: flex-end;
`;


export const TextAbout = styled.div<TextAboutProps>`
    
    color: var(--branco);

    h1 {
        font-size: 2em;
        font-family: var(--fonte);
        text-shadow: 2px 2px 4px black;
        max-width: ${props => props.isMaxWidth ? '40%' : '100%'};
        margin-bottom: 4em;
        margin-left: 2em;

    }

    strong {
        color: var(--amarelo)
    }

`;


export const TextAboutDeadLift = styled.div`
    color: var(--branco);

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    color: var(--branco);
    font-family: 'Bebas Neue', sans-serif;
    text-shadow: 1px 1px 2px white;
    font-size: 45px;

    strong {
        color: var(--amarelo);
    }
`;


export const TextAboutExercise = styled.div`

color: var(--branco);

    h1 {
        text-align: center;
        font-size: 2em;
        font-family: var(--fonte);
        text-shadow: 2px 2px 4px black;

    }

    strong {
        color: var(--amarelo)
    }
`;


export const ExerciseInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
`;


export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 50vh;
    border: 3px solid var(--amarelo);
    border-radius: 40px;
    align-self: center;
`;


export const TextSide = styled.div`
    font-size: 30px;
    font-family: var(--fonte);
    color: var(--branco);
    text-shadow: 2px 2px 4px black;
    text-align: center;
`;


export const DeadLiftDiv = styled.div`
    background-image: url(${Deadlift});
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 60vh;

    display: flex;
`;


export const ImageText = styled.div`
    margin-top: 5em;
    position: relative;

    img {
        width: 100%;
        height: 500px;
    }

`;


export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: center;
    align-items: center;
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



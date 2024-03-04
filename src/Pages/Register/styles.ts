import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: var(--amarelo);

`

export const Form = styled.form`
    display: flex;
    position: absolute;
    left: 30%;
    padding: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: var(--azul);
    border-radius: 60px;
    box-shadow: 4px 2px 15px 1px black;
    width: 100%;
    max-width: 730px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-family: var(--fonte);
        font-size: 26px;
        font-weight: light;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: 600;
    }

    a {
        color: white;
        font-size: 14px;
    }
`

export const SubcontainerSign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px 10px;
    align-items: center;
`

export const ImageContainer = styled.div`
    position: fixed;

`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: scale-down;

`
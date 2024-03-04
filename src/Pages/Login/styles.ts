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
    position: absolute;
    right: 22%;
    display: flex;
    padding: 4rem;
    flex-direction: column;
    margin-right: 12.5em;
    align-items: center;
    justify-content: center;
    background-color: var(--azul);
    box-shadow: 1px 5px 20px 1px black;
    border-radius: 45px;
    width: 100%;
    max-width: 650px;
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
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    background-color: white;

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
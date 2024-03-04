import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import ImgLogin from "../../Assets/images/sport-equipment.jpg"
import { FaArrowCircleLeft } from "react-icons/fa";

import Input from "../../Components/Inputs/Input";
import LoginButton from "../../Components/Buttons/LoginButton";
import BackButton from "../../Components/Buttons/Back";

import { validarEmail, validarSenha } from "../../Utils/validators";
import { Container, Form, ImageContainer, Image, SubcontainerSign } from './styles'

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "", 
        password: ""
    });
    const navigate = useNavigate();

    const handleLoginError = (error: any) => {
        console.log(JSON.stringify(error));
        alert('Algo deu errado com o seu Login');
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://anotadin-api.herokuapp.com/api', form, { withCredentials: true })
            .then((res: any) => {
                console.log('response do login', res);
                alert('usuário logado com sucesso');
                navigate('/sistema');

            })
        } catch (err) {
            handleLoginError(err);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (event: any) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    }

    console.log('O form está valido ?', validadorInput());

    return (
        <Container>
            <NavLink to="/">
                <BackButton />
            </NavLink>
            <ImageContainer>
                <Image src={ImgLogin}
                    alt="image-background"
                />
            </ImageContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Acesse sua conta</h1>
                <Input
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <LoginButton
                    type='submit'
                    text='Entrar'
                    disabled={loading === true || !validadorInput()}
                />

                <SubcontainerSign>
                    <p>Ainda não possui uma conta?</p>
                    <NavLink to="/cadastrar">Cadastre-se</NavLink>
                </SubcontainerSign>

            </Form>
        </Container>
    )
}

export default Login;

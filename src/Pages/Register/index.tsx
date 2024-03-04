import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

import ImgRegister from "../../Assets/images/register-background.jpg"

import Input from "../../Components/Inputs/Input";
import BotaoLogin from "../../Components/Buttons/LoginButton";
import BackButton from "../../Components/Buttons/Back";

import { 
    validarEmail, 
    validarSenha, 
    validarNome, 
    validarConfirmarSenha
 } from "../../Utils/validators";

import { 
    Container, 
    Form, 
    SubcontainerSign, 
    ImageContainer, 
    Image 
} from './styles'


const Register = () => {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: "",
        password: "",
        confirmarPassword: ""
    });
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log('passou');
        
        // try {
        //     setLoading(true)
        //     const { data } = await userService.cadastrar({
        //       nome: form.nome,
        //       telefone: form.telefone,
        //       email: form.email,
        //       password: form.password,
        //     })
        //     if (data) {
        //       const responseLogin = await userService.login({
        //         email: form.email,
        //         password: form.password
        //       })
        //       if (responseLogin === true) {
        //         alert('usuário Cadastrado com Sucesso')
        //         navigate('/login')
        //       }
        //   }
        // }
        // catch (err) {
        //     alert('Algo deu errado com o seu Cadastro' + err)
        // } finally {
        //     setLoading(false)
        // }
        
    }

    const handleChange = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const validadorInput = () => {
        return validarEmail(form.email) 
        && validarSenha(form.password)
        && validarConfirmarSenha(form.password, form.confirmarPassword)
        && validarNome(form.nome)
      }

    console.log('O form está valido ?', validadorInput());

    return (
        <Container>
            <NavLink to="/login">
                <BackButton styles={{ color: 'white' }}/>
            </NavLink>
            <ImageContainer>
                <Image src={ImgRegister}
                    alt="image-background"
                />
            </ImageContainer>
            <Form>
                <h1>Faça o seu Cadastro</h1>
                
                <Input
                    name='username'
                    placeholder='Digite o seu username'
                    onChange={handleChange}
                    type='text' 
                />
                <Input
                    name='nome'
                    placeholder='Digite o seu nome completo'
                    onChange={handleChange}
                    type='text' 
                />
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
                <Input
                    name='confirmarPassword'
                    placeholder='Digite sua senha novamente'
                    onChange={handleChange}
                    type='password' 
                />
                <BotaoLogin
                    type='submit'
                    value='Efetuar Cadastro'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()} 
                />

                <SubcontainerSign>
                    <p>Já possui uma conta?</p>
                    <NavLink to="/login">Login</NavLink>
                </SubcontainerSign>
                
            </Form>
        </Container>
    )
}

export default Register;
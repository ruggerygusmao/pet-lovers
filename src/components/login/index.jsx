import React, { useState } from 'react';
import { Form, Logo, Container } from './styles';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.jpeg";
import { axiosApi } from '../../services/axios';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const response = await axiosApi.post('login', {
                "email": email,
                "password": password,
            });
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //window.location = "/home";
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="logo" />
                    <div>
                        Não abandone! Anuncie já em nossa plataforma e coloque seu pet para doação...
                    </div>
                </Logo>

                <Form onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />

                    <label>Senha</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit">Entrar</button>

                    <Link to="/cadastrar">Cadastre-se já</Link>
                </Form>
            </Container>
        </>
    );
}
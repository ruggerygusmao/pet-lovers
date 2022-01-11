import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Form, Buttons, Container, Logo} from './styles';
import { useNavigate } from "react-router-dom";
import logoCadastrar from '../../img/cadastrar.jpg';
import { axiosApi } from '../../services/axios';

export default function Cadastro(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const response = await axiosApi.post('register', {
                "name": nome,
                "email": email,
                "password": password,
                "confirm_password": password,
            });
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //window.location = "/home";
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <div>
                    <label>Nome</label>
                    <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} required/>
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="tel" name="telefone" id="telefone" required/>
                </div>
                <div>
                    <label>Cidade</label>
                    <input type="text" name="cidade" id="cidade" required/>
                </div>
                <div>
                    <label>Bairro</label>
                    <input type="text" name="bairro" id="bairro" required/>
                </div>
                <div>
                    <label>Estado</label>
                    <input type="text" name="estado" id="estado" required/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="senha" id="senha" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <Buttons>
                    <button>Cadastrar</button>
                    <Link to='/'>Voltar</Link>
                </Buttons>
            </Form>

            <Logo>
                <img src={logoCadastrar} alt="logoCadastrar" />
            </Logo>
        </Container>
        </>
    );
}
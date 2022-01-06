import React from "react";
import {Form, Logo, Container} from './styles';
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg"
 export default function Login(){
    return(
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                
                <Form>
                    <label>Usuário</label>
                    <input type="text" name="user" id="user" />

                    <label>Senha</label>
                    <input type="password" name="password" id="password" />

                    <button>Entrar</button>

                    <Link to="/cadastrar">Cadastre-se já</Link>
                </Form>
            </Container>
        </>
    );
}
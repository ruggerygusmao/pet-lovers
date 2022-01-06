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
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" required/>

                    <label>Senha</label>
                    <input type="password" name="password" id="password" required/>

                    <button>
                        <Link to="/home">Entrar</Link>
                    </button>
                    
                    <Link to="/cadastrar">Cadastre-se já</Link>
                </Form>
            </Container>
        </>
    );
}
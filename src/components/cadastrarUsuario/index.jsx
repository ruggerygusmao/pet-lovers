import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Buttons, Container, Logo} from './styles';
import logoCadastrar from '../../img/cadastrar.jpg';

export default function Cadastro(){
    return(
        <>
        <Container>
            <Form>
                <h1>Cadastro</h1>
                <div>
                    <label>Nome</label>
                    <input type="text" name="nome" id="nome" required/>
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" required/>
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
                    <input type="password" name="senha" id="senha" required/>
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
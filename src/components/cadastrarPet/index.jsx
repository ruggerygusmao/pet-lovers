import React from 'react';
import { Link } from 'react-router-dom';
import { Buttons } from '../cadastrarUsuario/styles';
import Nav from '../nav';
import {Form} from './styles';

export default function CadastrarPet(){
    return(
        <>
        <h1>Registrar Pet</h1>
        <Nav />
        <Form>
                <div>
                    <label>Raça</label>
                    <input type="text" name="raca" id="raca" required/>
                </div>
                <div>
                    <label>Idade</label>
                    <input type="text" valu name="idade" id="idade" required/>
                </div>
                <div>
                    <label>Vacinado</label>
                    <input type="text" name="vacina" id="vacina" required/>
                </div>
                <div>
                    <label>Endereço entrega</label>
                    <input type="text"  name="endereco" id="endereco" required/>
                </div>
                <div>
                    <label>Foto</label>
                    <input type="file"  name="img" id="img" />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea name="descricao" id="descricao" cols="30" rows="5">
                    </textarea>
                </div>
                <Buttons>
                    <button>Cadastrar</button>
                    <Link to="/home">Cancelar</Link>
                </Buttons>
        </Form>
        </>
    );
}
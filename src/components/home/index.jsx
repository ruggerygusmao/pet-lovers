import React from 'react';
import Publicacao from '../publicacao';
import Nav from '../nav';
import { Link } from 'react-router-dom';
import { Botao } from './styles';



export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Nav />
            <Botao>
                <Link to='/cadastrarPet'>Cadastrar Pet</Link>
            </Botao>
            <Publicacao />
        </>
    );
}
import React from 'react';
import Nav from '../nav';
import Publicacao from '../publicacao';

export default function MeusPets(){
    return(
        <>
            <h1>Pets Registrados por você</h1>
            <Nav/>
            <Publicacao botoes="true" />
        </>
    );
}
import React from 'react';
import Publicacao from '../publicacao';
import Nav from '../nav';

export default function Home(){
    return(
        <>
            <h1>Home</h1>
            <Nav />
            <Publicacao />
            <Publicacao />  
        </>
    );
}
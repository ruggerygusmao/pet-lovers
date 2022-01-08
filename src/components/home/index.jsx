import React, { useState, useEffect } from 'react';
import Publicacao from '../publicacao';
import Nav from '../nav';
import { Link } from 'react-router-dom';
import { Botao } from './styles';
import { axiosApi } from '../../services/axios';


export default function Home() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        const fetchPets = async () => {
            const response = await axiosApi.get('pets');
            const { data } = response.data;
            setPets(data);
        };
        fetchPets();
    }, []);

    return (
        <>
            <h1>Home</h1>
            <Nav />
            <Botao>
                <Link to='/cadastrarPet'>Cadastrar Pet</Link>
            </Botao>
            {pets.length
                ? pets.map(pet => <Publicacao name={pet.name} photo_url={pet.photo_url} />)
                : <p>Carregando...</p>
            }
        </>
    );
}
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Buttons } from '../cadastrarUsuario/styles';
import Nav from '../nav';
import { Form } from './styles';
import { axiosApi } from '../../services/axios';

export default function CadastrarPet() {
    const [nome, setNome] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const pet = { name: nome, photo_url: photoUrl }
            await axiosApi.post('pets', pet);
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <h1>Registrar Pet</h1>
            <Nav />
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Raça</label>
                    <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Idade</label>
                    <input type="text" valu name="idade" id="idade"  />
                </div>
                <div>
                    <label>Vacinado</label>
                    <input type="text" name="vacina" id="vacina"  />
                </div>
                <div>
                    <label>Endereço entrega</label>
                    <input type="text" name="endereco" id="endereco"  />
                </div>                <div>
                    <label>URL da foto</label>
                    <input type="text" name="photo_url" id="photo_url" onChange={(e) => setPhotoUrl(e.target.value)} required />
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
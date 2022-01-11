import React, { useState, useEffect } from 'react';
import { Container, Img, Item } from './styles';
import { axiosApi } from '../../services/axios';
//import { useNavigate } from 'react-router-dom';

export default function Publicacao(props) {
    ///const { name, photo_url,id } = props;
    ///const {key, setKey} = useState("");
    //const navigate = useNavigate();
   
        const [pets, setPets] = useState([]);
        useEffect(() => {
            const fetchPets = async () => {
                const response = await axiosApi.get('pets');
                const { data } = response.data;
                setPets(data);
            };
            fetchPets();
        }, []);
    
    const deletePet = (key)=>{
        axiosApi.delete(`https://de-um-lar-seu-pet-backend.herokuapp.com/api/pets/${key}`);
        //navigate("/home");
    };
                 
    return (
        <>
        {pets.map((pet) =>{
                    return(
            <Container>
            
                <Item>
                    <div>
                        <label>Raça</label>
                        <input type="text" value={pet.name} name="raca" id="raca" />
                    </div>
                    <div>
                        <label>Idade</label>
                        <input type="text" value="" name="idade" id="idade" />
                    </div>
                    <div>
                        <label>Vacinado</label>
                        <input type="text" value="" name="vacina" id="vacina" />
                    </div>
                    <div>
                        <label>Endereço entrega</label>
                        <input type="text" value="" name="endereco" id="endereco" />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea name="descricao" id="descricao" value="" cols="30" rows="5">
                        </textarea>
                    </div>
                </Item>

                <Img>
                    <img src={pet.photo_url} alt="img-pet"/>
                        <div>
                            <button>Editar</button>
                            <button onClick={()=>{deletePet(pet.id)}}>Remover</button>
                           
                        </div>
                </Img> 
            </Container>
                    )}
        )}
        </>
    );
}
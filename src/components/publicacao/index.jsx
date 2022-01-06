import React from 'react';
import logo from '../../img/logo.jpeg';
import {Container, Img, Item} from './styles';

export default function Publicacao(){
    return(
        <>
            <Container>
                <Item>
                    <div>
                        <label>Raça</label>
                        <input type="text" value="Pitbul" name="raca" id="raca" />
                    </div>
                    <div>
                        <label>Idade</label>
                        <input type="text" value="2 anos" name="idade" id="idade" />
                    </div>
                    <div>
                        <label>Vacinado</label>
                        <input type="text" value="Sim" name="vacina" id="vacina" />
                    </div>
                    <div>
                        <label>Endereço entrega</label>
                        <input type="text" value="2 anos" name="endereco" id="endereco" />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea name="descricao" id="descricao" value="testando" cols="30" rows="5">
                        </textarea>
                   </div>
                </Item>
                <Img>
                    <img src={logo} alt="logo" />
                    <div>
                        <button>Editar</button>
                        <button>Remover</button>
                   </div>
                </Img>
            </Container>
        </>
    );
}
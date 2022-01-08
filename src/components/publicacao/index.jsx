import React, { useState } from 'react';
import logo from '../../img/logo.jpeg';
import { Container, Img, Item } from './styles';

export default function Publicacao(props) {
    const [exibirBotoes] = useState(props.botoes);
    const { name, photo_url } = props;

    return (
        <>
            <Container>
                <Item>
                    <div>
                        <label>Raça</label>
                        <input type="text" value={name} name="raca" id="raca" />
                    </div><div>
                        <label>Raça</label>
                        <input type="text" value="" name="raca" id="raca" />
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
                    <img src={photo_url ?? logo} alt="Pet" />
                    {exibirBotoes &&
                        <div>
                            <button>Editar</button>
                            <button>Remover</button>
                        </div>
                    }
                </Img>

            </Container>
        </>
    );
}
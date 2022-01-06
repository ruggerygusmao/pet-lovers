import React from 'react';
import {NavB} from './styles';
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <>
            <NavB>
                <ul>
                    <li>Home</li>
                    <li> <Link to="/">Sair</Link></li>
                </ul>
            </NavB>
        </>
    );
}
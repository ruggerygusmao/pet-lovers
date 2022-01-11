import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastrar from './components/cadastrarUsuario';
import CadastrarPet from './components/cadastrarPet';
import Home from './components/home';
import MeusPets from './components/meusPets';


ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/cadastrarPet" element={<CadastrarPet/>} />
      <Route path="/meusPets" element={<MeusPets/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


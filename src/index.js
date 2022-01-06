import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastrar from './components/cadastrarUsuario';
import Home from './components/home';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cadastrar" element={<Cadastrar />} />
      <Route path="home" element={<Home/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


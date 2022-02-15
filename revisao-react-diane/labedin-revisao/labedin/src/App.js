import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Anika from './fotoperfil.jpeg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled, { createGlobalStyle } from "styled-components";



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Anika}
          nome="Anika"
          descricao="Ola, eu sou a Anika, sou agente do fbi infiltrada na Labenu, estou investigando se a escola esta estimulando os alunos a irem p lado obscuro do TI, varios alunos dessas escola estao se tornando hackers e cometendo grandes crimes."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>




      {/* 
      <div className="page-section-container">
        <CardPequeno
          descricao="email: anika.xp@gmail.com!"
        />
        <CardPequeno
          descricao="Endereço: Av Brasil, 2000, Sao Paulo SP"
        />
      </div> */}

      <div>
        <CardPequeno email={"email: anika.xp@gmail.com"} />
      </div>

      <div>
        <CardPequeno endereco={"Endereço: Av Brasil, 2000, Sao Paulo SP"} />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="fbi"
          descricao="investigação!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="labenu"
          descricao="estudando e investigando."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

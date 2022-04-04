import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemDiane from './components/imagemDiane.jpeg';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {imagemDiane} 
          nome="Diane" 
          descricao="Ola, sou a Diane Araujo, 30 anos, formada em ADM, RH e MBA em finanças auditoria e controladoria. Em transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2></h2>
        <CardPequeno 
          email="dianesaraujo.arq@gmail.com" 
          descricao=""
        />
        
        <CardPequeno 
          endereço="Endereço: Av Rondon pacheco 3223 Uberlandia MG" 
          descricao="Av Rondon pacheco 3223 Uberlandia MG" 
        />
      </div>




      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="programando o futuro!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Ministerio Publico" 
          descricao="Apontando defeitos." 
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

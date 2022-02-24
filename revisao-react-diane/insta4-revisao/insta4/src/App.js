import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {


    arrayPost: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'Flavio',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'Iza',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      }
    ],
    // Agora precisamos de variáveis no estado, guardando
    // os valores dos dois inputs que temos na tela
    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: ""
  };

  adicionarPost = () => {
    // Colocamos em uma variavel o objeto que representa uma novo post
    const novoPost = {
      // Puxamos da variavel de estado "valorNomeUsuario" o nome dela
      nome: this.state.valorNomeUsuario,
      foto: this.state.valorFotoPost,
      post: this.state.valorFotoPost
    };
    // Copia array de pessoas e adiciona um post no final
    const novosPosts = [...this.state.arrayPost = novoPost];
    // Define o estado "pessoas" como a variavel "novoPessoas" ????????????????????
    this.setState({ arrayPost: novoPost });
  };
  onChangeInputNome = (event) => {
    // Essa função é chamada toda vez que algo é digitado no input de nome

    // Define o estado "valorNomeUsuario" como o valor atual do input, que vem do event
    this.setState({ valorNomeUsuario: event.target.value });
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorFotoUsuario: event.target.value })
  }

  onChangeInputFotoPort = (event) => {
    this.setState({ valorFotoPost: event.target.value })
  }


  render() {
    const listaDePost = this.state.arrayPost.map((pessoas) => {
      return (
        <Post
          nomeUsuario={pessoas.nomeUsuario}
          fotoUsuario={pessoas.fotoUsuario}
          fotoPost={pessoas.fotoPost}
        />
      );
    });

    return (
      <div>
        <div>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorNomeUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputNome}
            placeholder={"Nome do usuario"}
          />
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorFotoUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuario"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra (qual a difereça ???????????)
            value={this.state.valorFotoPost}
            // E a função também é outra ????????
            onChange={this.onChangeInputFotoPort}
            placeholder={"Foto post"}
          />
          <button onClick={this.adicionapost}>Adicionar</button>
        </div>
        <div>
          {listaDePost}
        </div>
      </div>
    );
  }
}
export default App;

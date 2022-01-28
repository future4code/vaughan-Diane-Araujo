import React from "react";
import TelaCadastro from "./componets/TelaCadastro";
import TelaListaDeCadastro from "./componets/TelaListaDeUsuario";



export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = ()  => {
switch (this.state.telaAtual){
case "cadastro":
return <TelaCadastro irParaLista={this.irParaLista}/> 
case "lista":
  return <TelaListaDeCadastro irParaCadastro={this.irParaCadastro}/>
  default:
    return <div>Erro! Pagina nao encontrada :(</div>

}

  }


  irParaCadastro = () => {
this.setState({telaAtual: "cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})

  }
  render() {
    return (
      <div>
<TelaCadastro/>
<TelaListaDeCadastro/>
      </div>
    );
  }
}



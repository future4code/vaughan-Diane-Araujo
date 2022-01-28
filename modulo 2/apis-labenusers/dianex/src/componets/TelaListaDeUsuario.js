import React from 'react';
import axios from "axios"
import styled from "styled-components"



const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px; 
margin: 10px;
width: 300px;
display: flex;
justify-content:space-between;
`


export default class TelaListaDeCadastro extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () => {
        const url = "https://us-centrall-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "diane-silva-vaughan"
            }
            })
            .then((res) => {
                this.setState({usuarios: res.data.result.list})
            })
            .catch((err) => {
        alert("ocorreu um problema")
    
    })
}


deletarUsuario = (id) => {
    const url = `https://us-centrall-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
        headers: {
            Authorization: "diane-silva-vaughan"
        }
    })
        .then((res) => {
            alert("usuario deletado")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("ocorreu um problema")

        })
}
render() {
    const listaUsuarios = this.state.usuarios.map((user) => {
        return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
        )
    })

    return (
        <div>


            <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            <h2>Lista de Usuarios</h2>
            {listaUsuarios}

        </div>

    )


}
}
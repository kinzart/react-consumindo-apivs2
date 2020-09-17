import React, { Component } from 'react';
import api from './api';

class App extends Component {
  

  state = {
    artigos: [],
  }


  async componentDidMount(){
    const res = await api.get();
    //console.log(res.data);
    this.setState({artigos: res.data});
  }

    render(){

      const {artigos} = this.state;
      console.log(artigos);
      return(
      <div>
        <h1>Listar Artigos</h1>
        <ul style={{listStyleType: "none", margin: 0, padding: 0}}>
          {artigos.map(artigo => (
            <li key={artigo._id}>
              <h2>Titulo: {artigo.titulo}</h2>
              <p>Conteudo: {artigo.conteudo}</p>
            </li>
          ))}
        </ul>
      </div>  
      );
    };
  };

export default App;

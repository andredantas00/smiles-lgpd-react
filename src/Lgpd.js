import React, { Component } from 'react';
import './Lgpd.css';
import Teste from './Modal';

class Lgpd extends Component {

  constructor(props) {
      super(props);
      this.state = {
          exibirLgpd: <div class="lgpd">
              <div class="lgpd-text" >
                  <span>Utilizamos cookies e outras tecnologias pra melhorar a sua experiência no nosso site.</span>
              </div>
             
              <button  class="lgpd-regulamento" onClick={this.regulamento.bind(this)}>
              
                  <span>Ler regulamento</span>
              </button>
              <button class="lgpd-aceitar" onClick={this.aceitar.bind(this)} >
                  
                  
                      <span>Aceitar</span>
                  
                  </button>
          </div>
      };

      this.aceitar = this.aceitar.bind(this);
      this.regulamento = this.regulamento.bind(this);
  }

  aceitar() {      
      localStorage.setItem("cookies", "accepted");
      window.location.reload();
      this.setState({ exibirLgpd: <div></div> })
  }

  regulamento() {
    this.setState({ exibirLgpd: <div><Teste /></div> })
}


  render() {
      const lgpd = localStorage.getItem("cookies");
      console.log('Aceitou Lgpd:'+ lgpd);

      //localStorage.removeItem("cookies");
      //window.location.reload();

      if(lgpd !== null){
          return (
              <div>                    
              </div>
          );
      }
      return (
          <div>
              {this.state.exibirLgpd}
          </div>
      );
  }
}

export default Lgpd;

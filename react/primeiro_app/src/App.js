import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={texto: ""};
    this.clicou = this.clicou.bind(this);
  }
  clicou(){
    this.setState({texto: "clicou no botão"});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="button" value="clique aqui" onClick={this.clicou}/>
          <div>{this.state.texto}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function saludar(nombre, how) {
  alert(`${how} ${nombre}`);
}

/**
 * BotonQueSaluda Component
 * @param {String} name Nombre al que saludar
 * @param {String} how Tipo de saludo
 * @return Devuelve un boton que lanza un alert en el click
 */
const BotonQueSaluda = ({name, how = "Hola"}) => 
  <button onClick={() => saludar(name, how)}>Click Me</button>

const Selector = ({items}) => 
  <select>
    {items.map(({id, value}) => 
      <option key={id}>{value}</option>
    )}
  </select>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <div>
        <BotonQueSaluda name="Carlos" how="Hola"/>
      </div>
      <div>
        <Selector items={[{id: 1, value: 'Uno'}, {id: 2, value: 'Dos'}, {id: 3, value: 'Tres'}]}/>
      </div>
      </div>
    );
  }
}

export default App;

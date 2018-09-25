import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contador from '../../../../../../../Downloads/demo/src/Contador'

function saludar(nombre, apellidos) {
    alert(`hola ${nombre} ${apellidos}`) // 'hola ' + nombre
}

const carlos = { name: "Carlos", surnames: "López Cendón" }

//const BotonQueSaluda = ({who}) =>
class BotonQueSaluda extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        const { who } = this.props
        return <button className = { who.name }
        onClick = {
                () => saludar(who.name, who.surnames) } >
            Saludar a { who.name } { who.surnames } <
            /button>
    }
}

const Selector = ({ items, onSelect }) =>
    <
    select onChange = { onSelect } > {
        items.map(item =>
            <
            option key = { item.id }
            value = {-item.id } > { item.name } < /option>
        )
    } <
    /select>

class App extends Component {
    constructor() {
        super()
        this.state = {
            showContador: true
        }
    }
    changeSelection(event) {
        this.log(event.target.value)
    }
    log(msg) {
        console.log(msg)
    }
    disableContador = () => {
        this.setState({
            showContador: false
        })
    }
    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Welcome to React < /h1> <
            /header> <
            p className = "App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. <
            /p> <
            div >
            <
            Selector items = {
                [
                    { id: 1, name: 'uno' },
                    { id: 2, name: 'dos' }
                ]
            }
            onSelect = { this.changeSelection.bind(this) }
            /> {
                this.state.showContador &&
                    <
                    Contador / >
            } <
            BotonQueSaluda who = {
                { name: 'Carlos', surnames: 'López' } }
            /> <
            button onClick = { this.disableContador } > Disable < /button> <
            /div> <
            /div>
        );
    }
}

export default App;
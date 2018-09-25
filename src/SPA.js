import React from 'react';
import { BrowserRouter, NavLink, Link, Route, Switch } from 'react-router-dom';

const SPA = () =>
    <BrowserRouter>
        <div>
            <NavLink to="/pag1/first">Pag 1</NavLink> 
            <NavLink to="/pag2">Pag 2</NavLink> 
            <NavLink to="/pag3">Pag 3</NavLink>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pag1" component={PageOne} />
                <Route path="/pag1" component={PageTwo} />
                <Route path="/pag3" component={PageOne} />
            </Switch>
        </div>
    </BrowserRouter>

export default SPA;

const Home = () => <p>Home</p>


const PageOne = ({match: {path}}) =>
    <div>
        <h1>PageOne!</h1>
        <Link to={`${path}/first`}>Pag 2</Link>
        <Link to={`${path}/second`}>Pag 3</Link>
        <Route path={`${path}/first`} component={First} />
        <Route path={`${path}/second`} component={Second} />
    </div>
const PageTwo = () => 
    <h1>PageTwo!</h1>

const First = () => <p>First</p>
const Second = () => <p>Second</p>

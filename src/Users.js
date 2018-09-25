import React from 'react';
import './Users.css'
import logo from './logo.svg'


class Users extends React.Component {
    render() {
        if (this.state.loading) {
            return <img src={logo} className="App-logo"></img>
        }
        return <ul className="users">
            {
                this.state.users.map(user =>   
                    <li key={user.email}>
                        <User details={user}/>
                    </li>
                )
            }
        </ul>
    }
    state= {
        loading: false,
        users: []
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(({results}) => this.setState({
                loading: false,
                users: results
            }))
    }
}

const fullname = ({first, last}) => `${first} ${last}`;

class User extends React.Component {
    state = {
        showindDetails: false
    }
    toggleDetails = () => {
        this.setState({showindDetails: !this.state.showindDetails})
    }
    render () {
        const {details} = this.props
        return <div className="user">
            <img className="avatar" src={details.picture.medium} onClick={this.toggleDetails}></img>
            <h1 className="fullname">{fullname(details.name)}</h1>
            <pre>{details.email}</pre>
            {
                this.state.showindDetails &&
                <div>
                    <input type="tel" value={details.phone} disabled />
                    <div>
                        {details.location.city}&nbsp;{details.nat}
                    </div>
                </div>
            }
        </div>
    }
}

export default Users;

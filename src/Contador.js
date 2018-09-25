import React from 'react'

class Contador extends React.Component {
    state = {
        now: new Date(),
        numeric: false
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({now: new Date()})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    componentDidUpdate() {
        console.log('update!')
    }
    toggleMode = () => {
        this.setState({
            numeric: !this.state.numeric
        })
    }
    render(){ 
        return <div onClick={this.toggleMode}>
            {
                this.state.numeric ?
                    this.state.now.valueOf()
                    : this.state.now.toString()
            }
        </div>
    }
}

export default Contador
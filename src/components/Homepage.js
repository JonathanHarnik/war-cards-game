import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:""
             
        }
    }
    setName=(e)=>[
        this.setState({name:e.target.value})
    ]
    
    render() {
        return (
            <div>
                <h1>Ready for WAR</h1>
                <input onChange={this.setName} placeholder="Enter your name"/>
                <Link to="/game"><button onClick={()=>{this.props.name(this.state.name)}}>Start</button></Link>
            </div>
        )
    }
}

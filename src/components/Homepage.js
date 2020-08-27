import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            backgrounud:""
             
        }
    }
    setName=(e)=>[
        this.setState({name:e.target.value})
    ]
    setBackground=(e)=>{
        this.setState({backgrounud:e.target.value})
    }
    
    render() {
        return (
            <div>
                <h1 id="hp-title">Ready for WAR</h1>
                <div id="hp-input-div">
                    <input onChange={this.setName} placeholder="Enter your name" id="hp-input"/>
                    <select onChange={this.setBackground} id="backgroundSelect">
                        <option disable selected>Select background</option>
                        <option value="poker">Poker table</option>
                        <option value="wood">Wooden table</option>
                        <option value="picnic">Picnic table</option>
                        
                    </select>
                    <Link to="/game"><button id="hp-btn" onClick={()=>{this.props.setPlayer(this.state.name, this.state.backgrounud)}}>Start</button></Link>
                </div>
            </div>
        )
    }
}

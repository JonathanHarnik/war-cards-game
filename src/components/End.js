import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class End extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    
    render() {
        return (
            <div>
                <div className="result-div">
                    <h1 className="result-title">{this.props.result}</h1>
                    <h3 className="total-results">{this.props.wins}-{this.props.loses}</h3>
                    <Link to='/game'><button onClick={()=>{this.props.createDeck()}} className="result-btn">Again</button></Link>
                    <Link to='/' onClick={this.props.setHomePage}><button className="result-btn">Sign out</button></Link>
                </div>
                
            </div>
        )
    }
}

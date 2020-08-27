import React, { Component } from 'react'
import Cards from './Cards.js';

export default class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:1,
            playerCard:this.props.playerCards[0],
            compCard:this.props.compCards[0]
        }
    }
    deal=()=>{
       this.setState({counter:this.state.counter+1})
       this.setState({playerCard:this.props.playerCards[this.state.counter]})
       this.setState({compCard:this.props.compCards[this.state.counter]})
    }

    
    render() {
        return (
            <div>
                <button onClick={this.props.shuffle}>Deal</button>
                <h1 id="compName">Computer</h1>
                <div ><Cards player={this.state.playerCard}/></div>
                <button id="nextBtn" onClick={()=>{this.deal()}}>Next</button>
                <h1 id="playerName">{this.props.name}</h1>
                
            </div>
        )
    }
}

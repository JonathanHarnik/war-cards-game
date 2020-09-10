import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    cardColor=()=>{
        if(this.props.player.type == '♠︎' || this.props.player.type == '♣︎'){
            return "black";
        }
        else if(this.props.player.type == '♥︎' || this.props.player.type == '♦︎'){
            return "red";
        }
    }
    render() {
        return (
            <div id="cards-div">
        <div className='card comp-card' >
            <div className="card-top">
                <h4>{this.props.player.num}</h4>
                <h6 style={{color:this.cardColor}}>{this.props.player.type}</h6>
            </div>
            <div className="card-mid">
                <h1>{this.props.player.type}</h1>
            </div>
            <div className="card-btm">
                <h4>{this.props.player.num}</h4>
                <h6>{this.props.player.type}</h6>
            </div>
        </div>
        <div className='card player-card'>
            <div className="card-top">
                <h4>{this.props.comp.num}</h4>
                <h6>{this.props.comp.type}</h6>
            </div>
            <div className="card-mid">
                <h1>{this.props.comp.type}</h1>
            </div>
            <div className="card-btm">
                <h4>{this.props.comp.num}</h4>
                <h6>{this.props.comp.type}</h6>
            </div>
        </div>
    </div>
        )
    }
}

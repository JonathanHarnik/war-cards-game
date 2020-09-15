import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    // Setting the color of the cards icon 
    cardColorPlayer=()=>{
        if(this.props.player.type == '♠︎' || this.props.player.type == '♣︎'){
            return "black";
        }
        else if(this.props.player.type == '♥︎' || this.props.player.type == '♦︎'){
            return "red";
        }
    }

    cardColorComp=()=>{
        if(this.props.comp.type == '♠︎' || this.props.comp.type == '♣︎'){
            return "black";
        }
        else if(this.props.comp.type == '♥︎' || this.props.comp.type == '♦︎'){
            return "red";
        }
    }

    render() {
        return (
            <div id="cards-div">
                <div className='card comp-card' >
                <div className="card-top">
                        <h4 style={{color:this.cardColorComp()}}>{this.props.comp.num}</h4>
                        <h6 style={{color:this.cardColorComp()}}>{this.props.comp.type}</h6>
                    </div>
                    <div className="card-mid">
                        <h1 style={{color:this.cardColorComp()}}>{this.props.comp.type}</h1>
                    </div>
                    <div className="card-btm">
                        <h4 style={{color:this.cardColorComp()}}>{this.props.comp.num}</h4>
                        <h6 style={{color:this.cardColorComp()}}>{this.props.comp.type}</h6>
                    </div>
                </div>
                <div className='card player-card'>
                    <div className="card-top">
                        <h4 style={{color:this.cardColorPlayer()}}>{this.props.player.num}</h4>
                        <h6 style={{color:this.cardColorPlayer()}}>{this.props.player.type}</h6>
                    </div>
                    <div className="card-mid">
                        <h1 style={{color:this.cardColorPlayer()}}>{this.props.player.type}</h1>
                    </div>
                    <div className="card-btm">
                        <h4 style={{color:this.cardColorPlayer()}}>{this.props.player.num}</h4>
                        <h6 style={{color:this.cardColorPlayer()}}>{this.props.player.type}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

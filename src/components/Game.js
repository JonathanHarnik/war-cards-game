import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Cards from './Cards.js';


export default class Game extends Component {
    constructor(props) {
        super(props)
        this.divInfo=React.createRef();
        this.state = {
            style:{opacity:0, pointerEvents:"none"},
            compCards:this.props.compCards,
            playerCards:this.props.playerCards,
            playerCard:'',
            compCard:'',
            counter:26,
            flag:false,
            win:0,
            lose:0
        }
    }
   

    splitDeck=()=>{
        let x= Math.floor(Math.random()*this.state.counter);
        this.setState({compCard:this.state.compCards[x]})
        this.setState({playerCard:this.state.playerCards[this.state.counter-1]})

        // errasing chosen cards from deck so they wont be  re-used
        let temp=this.state.playerCards;
        temp.splice(this.state.counter, 1)
        this.setState({playerCards:temp})

        let temp2=this.state.compCards;
        temp2.splice(x,1);
        this.setState({compCards:temp2})


        this.setState({counter:this.state.counter-1})

        // switching b/w Deal-btn and <cards> + showing the "Next" button
        this.setState({style:{opacity:1, pointerEvents:"all"}})
        this.setState({flag:true})
    }

    deal=(e)=>{
        if(this.state.counter!==0){
            e.preventDefault()
        }
        else{
            this.props.result(this.state.win, this.state.lose)
        }
        // Comparing the value and not the num b/c of J, Q, K, A cards
        if(this.state.compCard.value>=this.state.playerCard.value){
            this.setState({lose:this.state.lose+1})
        }
        else{
            this.setState({win:this.state.win+1})
        }
        let x= Math.floor(Math.random()*this.state.counter);
        this.setState({compCard:this.state.compCards[x]})
        this.setState({playerCard:this.state.playerCards[this.state.counter-1]})

        // errasing chosen cards from deck so they wont be  re-used
        let temp=this.state.playerCards;
        temp.splice(this.state.counter, 1)
        this.setState({playerCards:temp})

        let temp2=this.state.compCards;
        temp2.splice(x,1);
        this.setState({compCards:temp2})


        this.setState({counter:this.state.counter-1})
    }




    show=()=>{
        if(this.state.flag==false){
            return  <button id="dealBtn" onClick={this.splitDeck}>Deal</button>
        }
        else if(this.state.flag==true){
            return <div><Cards player={this.state.playerCard} comp={this.state.compCard}/></div>
        }
    }

    showInfo=()=>{
        const div=this.divInfo.current;
        div.classList.remove('playerInfoClose');
        div.classList.add('playerInfoOpen');
        
    }

    hideInfo=()=>{
        const div=this.divInfo.current;
        div.classList.add('playerInfoClose');
        // If we remove the below, the animation on playerInfoClose doesnt work
        // div.classList.remove('playerInfoOpen');
    }

    
    
    render() {
        return (
            <div>
                <h1 id="compName">Computer</h1>
                {this.show()}
                <Link to='/end' onClick={(e)=>{this.deal(e)}}><button style={this.state.style} id="nextBtn" >Next</button></Link>
                <div className="player" >
                <div ref={this.divInfo} className="playerInfo">
                    <h3>{this.props.name}</h3>
                    <h4>Total wins:{this.props.wins}</h4>
                    <h4>Total loses:{this.props.loses}</h4>
                </div>
                    <h1 id="playerName" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}>{this.props.name}</h1>
                </div>
            </div>
        )
    }
}

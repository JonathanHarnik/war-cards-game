import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Game from './components/Game.js';
import homeImage from './images/hp-background.jpg';
import pokerTable from './images/green-background.jpg';
import woodenTable from './images/wood-background.jpeg';
import picnicTable from './images/picnic-background.jpg';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      player:'',
      background:`url(${homeImage})`,
      deck:[],
      playerCards:[],
      compCards:[],
      shuffled:[]
    }
  }
 

  setPlayer=(name, background)=>{
    // setting player's name and chosen background
    this.setState({player:name})
    if(background==="poker"){
      this.setState({background:`url(${pokerTable})`})
    }
    else if(background==="wood"){
      this.setState({background:`url(${woodenTable})`})
    }
    else if(background==="picnic"){
      this.setState({background:`url(${picnicTable})`})
    }
    this.createDeck()
  }

  createDeck=()=>{
    // creating a deck
    let temp=[]
    for(let x=1; x<14; x++){
      for(let y=1; y<5; y++){
        temp.push({num:x, type:y})
      }
    }
    // saving temp into both "deck" and "shuffled" to shuffle and divide only "shuffled" and keep "deck" as an original - does not work though
    this.setState({deck:temp})
    this.setState({shuffled:temp})
    // this.shuffleDeck(temp);
    
  }

  shuffleDeck=()=>{
    // shuffling the deck
    let shuffled=this.state.shuffled;
    // must use .length-1 (rather than .length) b/c then shuffled[x] wont exist in the first loop
    for(let x=shuffled.length-1; x>0; x--){
      // randomly selecting a position within the array of the deck
      let a=Math.floor(Math.random()*(x+1));
      let b=shuffled[a];
      // swapping the randomly selected element with the last element in the array
      shuffled[a]=shuffled[x];
      shuffled[x]=b;
    }
    // dividing the shuffled deck in two
    var temp1=shuffled.splice(26, 26)
    var temp2=shuffled.splice(0,26)
    this.setState({playerCards:temp1})
    this.setState({compCards:temp2})
    // Or, another way to divide:
    // this.setState({playerCards:shuffled.splice(26, 26)})
    // this.setState({compCards:shuffled.splice(0,26)})

    // saving the shuffled deck into state
    this.setState({shuffled:shuffled})
  }
  
  
  
  render() {
    return (
      <div id ="body" style={{backgroundImage:this.state.background}}>
        <Router>
          <Switch>
            <Route exact path='/' component={()=>{return <Homepage setPlayer={this.setPlayer}/>}}/>
            <Route exact path='/game' component={()=>{return <Game shuffle={this.shuffleDeck} name={this.state.player} playerCards={this.state.playerCards} compCards={this.state.compCards}/>}}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}

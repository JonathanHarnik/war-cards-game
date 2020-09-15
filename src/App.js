import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Game from './components/Game.js';
import End from './components/End.js';
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
      playerCards:'',
      compCards:'',
      result:''
    }
  }
 


  setPlayer=(name, background)=>{
    // setting player's name and chosen background
    this.setState({player:{name:name, wins:0, loses:0}})
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
    const temp=[]
    let suites=['♠︎','♣︎','♥︎','♦︎']
    for(let x=1; x<14; x++){
      for(let y=0; y<4; y++){
        temp.push({num:x, type:suites[y], value:x})
      }
    }
    // Adjusting  high card num to letters
    let newTemp=temp.map((item)=>{
      if(item.num==1){
        return {num:'A', type:item.type, value:item.value}
      }
      else if(item.num==11){
        return {num:'J', type:item.type, value:item.value}
      }
      else if(item.num==12){
        return {num:'Q', type:item.type, value:item.value}
      }
      else if(item.num==13){
        return {num:'K', type:item.type, value:item.value}
      }
      else{
        return item;
      }
    })
    this.setState({deck:newTemp})

    // Spliting the deck in 2
    let playerCards=[]
    for(let x=1 ; x<=26 ; x++){
      let y=Math.floor(Math.random()*27);
      playerCards.push(newTemp[y]);
      newTemp.splice(y,1);
    }
    this.setState({playerCards:playerCards})
    this.setState({compCards:newTemp})
  }

  result=(win, lose)=>{
    // Saving winning/losing streaks
    if(win>lose){
      this.setState({result:"Win"})
      let temp=this.state.player
      temp.wins++
      this.setState({player:temp})
    }
    else{
      this.setState({result:"Lose"})
      let temp=this.state.player
      temp.loses++
      this.setState({player:temp})
    }
  }

  setHomePage=()=>{
    this.setState({background:`url(${homeImage})`})
  }
  
  
  
  render() {
    return (
      <div id ="body" style={{backgroundImage:this.state.background}}>
        <Router>
          <Switch>
            <Route exact path='/' component={()=>{return <Homepage setPlayer={this.setPlayer}/>}}/>
            <Route exact path='/game' component={()=>{return <Game deck={this.state.deck} name={this.state.player.name} playerCards={this.state.playerCards} compCards={this.state.compCards} wins={this.state.player.wins} loses={this.state.player.loses} result={this.result}/>}}/>
            <Route exact path='/end' component={()=>{return <End wins={this.state.player.wins} loses={this.state.player.loses} result={this.state.result} createDeck={this.createDeck} setHomePage={this.setHomePage}/>}}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}

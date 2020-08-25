import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Game from './components/Game.js';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      player:''
       
    }
  }
  setName=(name)=>{
    this.setState({player:name})
  }
  
  render() {
    return (
      <div>
        <h1>War Game</h1>
        <Router>
          <Switch>
            <Route exact path='/' component={()=>{return <Homepage name={this.setName}/>}}/>
            <Route exact path='/game' component={()=>{return <Game name={this.state.player}/>}}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}

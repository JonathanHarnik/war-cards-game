import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage.js';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h1>War Game</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={()=>{return <Homepage/>}}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}

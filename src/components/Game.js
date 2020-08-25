import React, { Component } from 'react'

export default class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                
            </div>
        )
    }
}

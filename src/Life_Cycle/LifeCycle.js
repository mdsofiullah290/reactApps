import React, { Component } from 'react'




export default class LifeCycle extends Component {

    constructor(props) {
      super(props)

      console.log("constructor");
    
      this.state = {
         count: 0
      }

      
    }

    componentDidMount(){
         console.log("componentDidMount");
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
    }

 handleIncrement= ()=>{
       this.setState({
        count: this.state.count + 1,
       });
    }
    
  render() {

    console.log("render");
    return (
      <div>
       <h1>Count : {this.state.count}</h1>
       <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

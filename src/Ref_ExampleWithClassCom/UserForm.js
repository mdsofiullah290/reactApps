import React, { Component, createRef } from 'react'

class UserForm extends Component {




    constructor(props) {
      super(props)
    this.userNameRef = createRef();
      this.state = {
         
      }

  
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Submitted")
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.backgroundColor ="green"
        this.userNameRef.current.style.color="red"
      }
    
  render() {
    return (
      <div>
       
      <form onSubmit={this.handleSubmit}>
       <div>
       <label htmlFor="userName">UserName:</label>
        <input  type='text' id='userName' ref={this.userNameRef}/>
       </div>

       <div>
       <label htmlFor="Password">Password:</label>
        <input  type='password' id='password'/>
       </div>
      
       <button type='submit'>Register</button>
      </form>



      </div>
    )
  }
}
export default UserForm;
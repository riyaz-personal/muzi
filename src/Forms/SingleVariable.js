
import React from 'react';



class Form extends React.Component {
  constructor() {
      super()
  
      this.state = {
           username:' ',
           
           
      }
  }
  HandleValue=(event)=>{
       this.setState ({username:event.target.value})
  }
  SubmitAll(){
      alert( "Form is Submitted")
  }
  render() {
      return (
          
<form>
              <h1>"Hello,{this.state.username}</h1>
              Enter Your Name: <input type="text" onChange={this.HandleValue}/> <br/>
              
              <br/>
              <button onSubmit onClick={this.SubmitAll}>Submit</button>
              </form>
          
      )
  }
}

 export default Form;


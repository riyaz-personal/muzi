import React from 'react';
class Form extends React.Component {
  constructor() {
      super()
 this.state = {
           username:' ',
           age: ' ',
           errormsg: ' '
              };
  }
  HandleValue=(event)=>{
      let a=event.target.name 
      let b =event.target.value
      let err=' ';
      if(a==="age"){
          if(b!=='' && !Number(b))
          {
              err="Your age must be in numeric;"
          }
      }
      this.setState({errormsg:err})                               // doubt
       this.setState({[a]: b})
  }
  SubmitAll(){
      alert( "Form is Submitted")
  }
  render() {
      return (
          
<form>
              <h1>"Hello,{this.state.username},{(this.state.age)}</h1>
              Enter Your Name: <input type="text" name="username" onChange={this.HandleValue}/> <br/>
              Enter Your Age: < input type="text" name="age" onChange={this.HandleValue}/> {this.state.errormsg}
              <br/>
              <button onSubmit onClick={this.SubmitAll}>Submit</button>
              </form>
          
      )
  }
}
export default Form;
 
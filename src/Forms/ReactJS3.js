import {React,useState} from 'react';
// import './App.css';

function Form() {
    const [ name, setName] = useState(" ");
    const [id, setID] = useState(" ")
 function HandleChange(e){
    //  console.log(e.target.value)
     setName(e.target.value)}
    
  function SubmitClick(e){
      setID(name  )
      e.preventDefault();

  }   

  
    return (
        <div>
            <h1>Hello,{name} </h1>
            <h1>Hi, {id}</h1>
            <form>
            <input type="text"  
            onChange={HandleChange}
            placeholder="Enter Your Name" 
            value={name}/> <br/><br/>
            {/* <input type="password" value={'pwds'} placeholder="Enter the Password"/> <br/><br/>  doubt */}
            <button onClick={SubmitClick} >Submit</button>
            </form>
            

        </div>
    )
}

export default Form

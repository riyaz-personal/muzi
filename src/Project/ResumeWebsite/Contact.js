import React from 'react'
import './sample.css';
import { NavLink } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap'
class Contact extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             subject: "",
             body:""
        }
    }
    
    render() {
        const { location } = this.props;
        return (
           
            <div class="jumbotron" style={{textAlign:"center", color:"blue"}}>
            <h1 class="heading">Mohamed Muzammil</h1>
            <p class="subject">Web Developer</p>
       

        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Nav.Link href="/">Home</Nav.Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav activeKey={location.pathname}>
      <Nav.Link href="/project">Project</Nav.Link>
      <Nav.Link href="/youtube">Youtube</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/crud">CRUD</Nav.Link>     
    </Nav></Nav>
  </Navbar.Collapse>
</Navbar>
 <div className='heading'>
            <h2 style={{color:"black", textAlign:'center'}} >Feedback Form </h2> 
            <div class="container" id="mailme">
            <div class="row" >
             <div class="col sm-8 offset md-2">
            <form target='_blank' method="GET" >

        <label style= {{color:"red"}} >Name:</label> <br/>
        <input type="text" placeholder="Enter your name" id="name" class="form-control" required />


         <label for ='body'  style= {{color:"red"}} > Feedback:</label><br/>
        <textarea placeholder="Enter your feedback" id="fdbk"  class="form-control" rows="5" />
<br/>

 <input type="submit" value="Submit" id="navigation" className="btn btn-primary" />

 </form></div></div></div> </div><br/><br/><br/>


 
 
 <div class="jumbotron text-center" id="footer">
           <ul class="nav justify-content-center">
           <li class="nav-item">
           <a href="https://www.linkedIn.com/" class="fa fa-linkedin nav-link"target="_blank" style={{color:"blue"}}/>
           </li>

           <li class="nav-item">
           <a href="https://www.youtube.com/" class="fa fa-youtube nav-link"target="_blank" style={{color:"red"}}/>
           </li>

           <li class="nav-item">
           <a href="https://www.facebook.com/" class="fa fa-facebook nav-link"target="_blank" style={{color:"blue"}}/>
           </li>
           <li class="nav-item">
           <a href="https://www.twitter.com/" class="fa fa-twitter nav-link" target="_blank" style={{color:"blue"}}/>
           </li>
           </ul>
           </div>
 
 
 </div>
        )
    }



}
export default Contact

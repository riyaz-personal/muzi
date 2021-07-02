
import React from 'react'
import './sample.css';
import { Link } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap'

        
function Project(props){
    const { location } = props;
return(
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


            <h2>Project Domain and Tools</h2>
            <p>
This application is developed by using the following programmig languages and tools</p>

<ul class="list-group">
<li class="list-group-item"> Front End Developer - HTML,CSS,JS,ReactJS</li>
<li class="list-group-item"> Back End Developer  - Java,Python,Node Js</li>
<li class="list-group-item">            Database - MySQL, MangoDB</li>
<br></br> 
</ul> 
<button type="button" class= "btn btn-danger btn-md btn-block-md" ><a href="https://github.com/pearkes/gethub"> GitHub Link for Project Source Code</a></button>
<br></br><br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/PQsJR8ci3J0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




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

export default Project;

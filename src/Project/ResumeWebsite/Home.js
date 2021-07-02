import React from 'react';
import './sample.css';
import {Table} from 'react-bootstrap'
import {Nav,Navbar} from 'react-bootstrap'
function Home(props) {
    const { location } = props;
    return (
   <div>
<div class="jumbotron" style={{textAlign:"center", color:"blue"}}>
            <h1 class="heading">Mohamed Muzammil</h1>
            <p class="subject">Web Developer</p> </div>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Nav.Link href="/">Home</Nav.Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav activeKey={location.pathname}>
      <Nav.Link href="/project" >Project</Nav.Link>
      <Nav.Link href="/youtube">Youtube</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/crud">CRUD</Nav.Link>     
    </Nav></Nav>
  </Navbar.Collapse>
</Navbar>

<br/><br/>
           <div class="container">
               <div class="row">
                   <div class="col md-4">
                       <img class="img-responsive img-thumbnail" src= "https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.18169-9/38385_135783963119371_3900720_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=de6eea&_nc_ohc=E_x3t3kzPlkAX-YA3Ma&_nc_ht=scontent.fmaa2-2.fna&oh=35f6b4d1fd321192461e2a6de6b8c6a0&oe=60DD61BB"
                    alt="mycphoto" width="250px"/>
                   </div> <br></br> <br></br>


                   <div class="col md-6">
                       <h2 > Career Objective</h2>
                       <p class="subject">
                       Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.
                       </p>
                   </div>
               </div>
           </div>

           <div class="container">
               <div class="row">
                   <div class="col md-6">
            <h2> Technical Skills</h2>
            <ul>
                <li> Front End Developer - HTML,CSS,JS,ReactJS</li>
                <li> Back End Developer  - Java,Python,Node Js</li>
                <li>            Database - MySQL, MangoDB</li>
            </ul>
                   </div>
                   
                   <div class="col md-6">
                   <h2> Internships and Certification</h2>
            <ul>
                <li> I've done Web Development</li>
                <li> I've done App Development</li>
                
            </ul></div>
               </div>
           </div>


           <div class="container">
               <div class="row">
                   <div class="col md-12">
            <h1> My Projects</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Project Domain</th>
                    <th>Programming Languages</th>
                    <th>Project Link</th>
                </tr></thead>
                <tbody><tr>
                    <td>Full Stack Web Developement</td>
                    <td>HTML,CSS,JS,ReactJS</td>
                    <td> <a href="https://www.redbus.in/" target="_blank"> Bus Booking Application</a> </td>   
                </tr>
                <tr>
                    <td>Full Stack Web Developement</td>
                    <td>HTML,CSS,JS,ReactJS</td>
                    <td> <a href="https://www.olx.in/" target="_blank"> olx Application</a> </td>   
                </tr>
                <tr>
                    <td> Web Application</td>
                    <td>HTML,CSS,JS,ReactJS</td>
                    <td> <a href="https://www.google.in/" target="_blank">Google Application </a></td>   
                </tr>
                <tr>
                    <td>Responsive Web Application</td>
                    <td>HTML,CSS,JS,ReactJS</td>
                    <td><a href="https://reactjs.org/" target="_blank"> ReactJS Application</a> </td>   
                </tr></tbody>
            </Table>

            </div>
               </div>
           </div>

           
           <div class="container">
               <div class="row">
                   <div class="col md-12">
            <h1> Educational Qualifications</h1>
            <table class="table table-dark table-bordered">
                <tr>
                    <th>Degree</th>
                    <th>School/College</th>
                    <th>YOP</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>B.Tech(EIE)</td>
                    <td>S.I.T College</td>
                    <td> 2013 </td> 
                    <td>71</td>  
                </tr>
                <tr>
                    <td>12<sup>th</sup></td>
                    <td>CEOA</td>
                    <td> 2009 </td>  
                    <td>80</td> 
                </tr>
                <tr>
                    <td>10<sup>th</sup></td>
                    <td>SEV</td>
                    <td> 2007 </td> 
                    <td>83</td>  
                </tr>
                
            </table>

            </div>
            </div>
           </div>  

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

export default Home;

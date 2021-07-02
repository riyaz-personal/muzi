    import React from 'react'
    import './sample.css';
    import {Nav,Navbar} from 'react-bootstrap'
    function Youtube(props) {
        const { location } = props;
        return (
            <div>
                <div class="jumbotron" style={{textAlign:"center", color:"blue"}}>
                <h1 class="heading">Mohamed Muzammil</h1>
                <p class="subject">Web Developer</p> 
                
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


            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PQsJR8ci3J0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xuB1Id2Wxak" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b5oQZdzA37I" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PQsJR8ci3J0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xuB1Id2Wxak" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b5oQZdzA37I" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div></div>
        )
    }

    export default Youtube

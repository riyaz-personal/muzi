import React from 'react'
import { Button,Form,Col,Table} from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './sample.css';
import { Link } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap'

class SimpleForm extends React.Component {
constructor(props) {
    super(props)

    this.state = {
        
        inputForm:{name:'',
        age:'',
        dob:'',
        email:''},
        ArrayTable:[],
        id:null,
    }
}


changeIt=(e)=>{
    const{inputForm}=this.state
 const{name,value}=e.target
 this.setState({
    inputForm:
     {...inputForm,
     [name]:value  }
    });    
}


submitIt=(e)=>{
     e.preventDefault();
     const{inputForm,ArrayTable,id}=this.state
     console.log(id)
     if(id){ // id = (true || more than 0)
       ArrayTable[id-1]=inputForm;
     }else{
     ArrayTable.push(inputForm)}
     this.setState({ArrayTable, id:null, inputForm:{name:'',
     age:'',
     dob:'',
     email:''} })
}

edDel=({id, varOption})=>
{
    let{ArrayTable}=this.state
if(varOption==='edit'){
    const fetchData= ArrayTable[id-1];
this.setState({inputForm: fetchData,id})
}else{ 
    delete ArrayTable[id-1];
    ArrayTable= ArrayTable.filter((i=>i))
    this.setState({ArrayTable})
    
}


}

render(){
    const{inputForm,ArrayTable,id}=this.state
  
  const { location } = this.props;
 return (
      <div>


<div class="jumbotron" style={{textAlign:"center", color:"blue"}}>
            <h1 class="heading">Mohamed Muzammil</h1>
            <p class="subject">Web Developer</p></div>

             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
  <Nav.Link href="/">Home</Nav.Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav activeKey={location.pathname}>
    

      <Nav.Link href="/project" activeClassName="active" >Project  </Nav.Link>
      <Nav.Link href="/youtube" activeClassName="active" >Youtube  </Nav.Link>
      <Nav.Link href="/contact" activeClassName="active" >Contact  </Nav.Link>
      <Nav.Link href="/crud"    activeClassName="active" >   CRUD     </Nav.Link>     
    </Nav></Nav>
  </Navbar.Collapse>
</Navbar>



<br/>
         <h1 style={{textAlign:'center'}}>Simple CRUD Form</h1>
<form onSubmit={this.submitIt} >
<div className='container'><div className='row'><div className='col-md-12'>

        <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control type='text' 
                      name='name' 
                      value={( inputForm.name) || ""} 
                      placeholder='Enter your Name' 
                      onChange={(e)=>this.changeIt(e)} />
        </Form.Group></div></div></div>
               

<div className='container'><div className='row'><div className='col-md-12'>

       <Form.Row>  
        <Form.Group as={Col}>
       <Form.Label>Age:</Form.Label>
       <Form.Control type='number'  
                    name='age' 
                    value={(inputForm.age) || ""} 
                    placeholder='Enter your age' 
                    onChange={(e)=>this.changeIt(e)}/>
      </Form.Group>

        <Form.Group as={Col}>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='number' 
                      name='dob'
                      value={(inputForm.dob) || ""} 
                      placeholder='Enter your dob' 
                      onChange={(e)=>this.changeIt(e)}/>
       </Form.Group>
       </Form.Row></div></div></div>


<div className='container'><div className='row'><div className='col-md-12'>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>E-mail ID:</Form.Label>
       <Form.Control type='email'
                    name='email' 
                    value={(inputForm.email) || ""} 
                    placeholder='Enter your E-Mail Id' 
                    onChange={(e)=>this.changeIt(e)} />
        <Form.Text className="text-muted">We'll never share your email id to anyone else</Form.Text>
        </Form.Group></div></div></div>


<div className='container'><div className='row'><div className='col-md-12'>

        <Button variant='primary' 
                type='submit' 
                onClick={this.submitIt} 
                size='lg' 
                style={{textAlign:'center'}}>{id ? "Update" : "Add"}</Button>
                </div></div></div>

    </form>


<Table stripped bordered hover>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>DOB</th>
    <th>E-mail</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>
<>
{
     ArrayTable.map((item,index)=>{
        const id = index+1;
       return(
        <tr key={index}>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.dob}</td>
    <td>{item.email}</td>
    <td>{" "}<EditIcon onClick={()=>this.edDel({id, varOption:'edit'})}/></td>
    <td>{" "}<DeleteIcon onClick={()=>this.edDel({id, varOption:'delete'})} /></td>
    
</tr>)})
}</>

</Table>



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
    )}
}

export default SimpleForm

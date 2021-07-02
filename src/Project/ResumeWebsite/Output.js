import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" 
import Home from './Home';
import Project from './Project';
import Youtube from './Youtube';
import Contact from './Contact';
import SimpleForm from '../../Forms/SimpleForm';


class Output extends React.Component {
    render(){
        return(
            <Router>
            <div><Switch>
                <Route exact path='/'Component= {Home}/>
                <Route exact path='/project' Component= {Project}/>
                <Route exact path='/youtube' Component= {Youtube}/>
                <Route exact path='/contact' Component= {Contact}/>
                <Route exact path='/crud' Component= {SimpleForm}/>
                </Switch>
            </div></Router>
        )
    }
}export default Output;
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" 
import Home from './Home';
import Project from './Project';
import Youtube from './Youtube';
import Contact from './Contact';
import SimpleForm from '../../Forms/SimpleForm';
function Fff() {
    return (
        <div>
           
         <Router>
            
               <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route path='/project' component={Project}/>
                 <Route path='/youtube' component={Youtube}/>
                 <Route path='/contact' component={Contact}/>
                 <Route path='/crud' component={SimpleForm}/>
                 </Switch>
             </Router>
        </div>
    )
}

export default Fff

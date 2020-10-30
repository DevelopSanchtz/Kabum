import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { loginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/Navbar';


export class AppRouter extends Component {
    render() {
        return (
          
             <Router>

                 <div>
                     <Navbar/>

                     <Switch>
                         <Route exact path="/login" component={ loginScreen }  />
                         <Route exact path="/" component={ HomeScreen }/>
                     </Switch>

                 </div>

             </Router>

        )
    }
}

 

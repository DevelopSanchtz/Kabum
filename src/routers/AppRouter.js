
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { LoginScreen } from '../components/user/login/LoginScreen';
import { AppInitialRouters } from '../routers/AppInitialRouters';
 


export const AppRouter = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    
                    <Route  path="/" component={AppInitialRouters} />
                    
                </Switch>
            </div>
        </Router>
    )
}

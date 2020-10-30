import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { CreateKabum } from '../components/create-kabum/CreateKabum';
import { HomeScreen } from '../components/home/HomeScreen';
import { KabumsScreen } from '../components/kabums/KabumsScreen';
import { loginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/Navbar';


export class AppRouter extends Component {
    render() {
        return (

            <Router>

                <div>
                    <Navbar />

                    <Switch>

                        {/* <Route exact path="/kabums" component={HomeScreen} /> */}
                        <Route exact path="/login" component={loginScreen} />
                        <Route exact path="/kabums" component={KabumsScreen} />
                        <Route exact path="/home" component={HomeScreen}/>
                        <Route exact path="/create" component={ CreateKabum }/>
                        <Redirect path="/kabums" component={ KabumsScreen }/>
                    </Switch>

                </div>

            </Router>

        )
    }
}



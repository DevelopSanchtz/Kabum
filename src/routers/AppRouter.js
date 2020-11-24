
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { LoginScreen } from '../components/user/login/LoginScreen';
import { PinScreen } from '../components/user/login/PinScreen';
import { UsernameScreen } from '../components/user/login/UsernameScreen';
import { AppInitialRouters } from '../routers/AppInitialRouters';
import { LoginAdminScreen } from '../components/admin/auth/loginAdmin/LoginAdminScreen'
import { CreateKabumScreen } from '../components/admin/kabums/CreateKabumScreen';



export const AppRouter = () => {
    return (

        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/pin" component={PinScreen} />
                    <Route exact path="/gamertag" component={UsernameScreen} /> */}

                    <Route exact path="/loginadmin" component={LoginAdminScreen} />
                    <Route exact path="/create" component={CreateKabumScreen}/>

                    <Route path="/" component={AppInitialRouters} />

                </Switch>
            </div>
        </Router>
    )
}

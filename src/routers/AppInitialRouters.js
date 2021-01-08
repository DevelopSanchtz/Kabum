
import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { KabumsScreen } from '../components/admin/kabums/KabumsScreen';
import { Navbar } from '../components/admin/shared/navbar/Navbar';

export class AppInitialRouters extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div>
                    <Switch>
                        {/* admin */}
                        <Route exact path="/kabums" component={KabumsScreen} />
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </>
        )
    }
}



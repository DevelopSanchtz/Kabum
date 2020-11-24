
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { HomeScreen } from '../components/admin/home/HomeScreen';
import { CreateKabumScreen } from '../components/admin/kabums/CreateKabumScreen';
import { KabumsScreen } from '../components/admin/kabums/KabumsScreen';
import { Navbar } from '../components/admin/shared/navbar/Navbar';
import { ShowPlayersScreen } from '../components/user/players/ShowPlayersScreen';
import { AnswerQuestion } from '../components/user/questions/AnswerQuestionScreen';
import { LoginAdminScreen } from '../components/admin/auth/loginAdmin/LoginAdminScreen'

export class AppInitialRouters extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div>
                    <Switch>
                        {/* user */}
                        <Route exact path="/showplayers" component={ ShowPlayersScreen } />
                        <Route exact path="/answer" component={AnswerQuestion}/>

                        {/* admin */}
                        <Route exact path="/home" component={HomeScreen} />
                        <Route exact path="/kabums" component={KabumsScreen} />

                        
                        <Redirect to="/kabums" />
                    </Switch>
                </div>
            </>


        )
    }
}



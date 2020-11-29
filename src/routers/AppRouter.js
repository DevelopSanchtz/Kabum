
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
import { StartScreen } from '../components/admin/start/StartScreen';
import { ShowPlayersScreen } from '../components/user/players/ShowPlayersScreen';
import { responder } from '../components/user/players/responder';
import { cargarpregunta } from '../components/user/players/cargarpregunta';
import { NameKabumsScreen } from '../components/admin/nameKabum/NameKabumsScreen'
import { QuestionScreen } from '../components/admin/nameKabum/QuestionScreen'
import { AnswerQuestionAdminScreen } from '../components/admin/questionsAdmin/AnswerQuestionAdminScreen';
import { ResultsScreen } from '../components/admin/questionsAdmin/ResultsScreen';
import { Scoreboard} from '../components/user/players/scoreboard'


export const AppRouter = () => {
    return (

        <Router>
            <div>
                <Switch>

                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/pin" component={PinScreen} />
                    <Route exact path="/gamertag" component={UsernameScreen} />
                    <Route exact path="/loginadmin" component={LoginAdminScreen} />
                    <Route exact path="/create" component={CreateKabumScreen}/>
                    <Route exact path="/start" component={StartScreen} />
                    <Route exact path="/nameKabum" component={NameKabumsScreen} />
                    <Route exact path="/question" component={QuestionScreen} />
                    <Route exact path="/answerAdmin" component={AnswerQuestionAdminScreen} />
                    <Route exact path="/showplayers" component={ ShowPlayersScreen } />
                    <Route exact path="/responder" component={ responder } />
                    <Route exact path="/cargarpregunta" component={ cargarpregunta } />
                    <Route exact path="/resultadosAdmin" component={ ResultsScreen } />
                    <Route exact path="/scoreboard" component={ Scoreboard } />
                    

                    <Route path="/" component={AppInitialRouters} />

                </Switch>
            </div>
        </Router>
    )
}

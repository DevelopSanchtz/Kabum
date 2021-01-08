
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { LoginScreen } from '../components/user/login/LoginScreen';
import { PinScreen } from '../components/user/login/PinScreen';
import { AppInitialRouters } from '../routers/AppInitialRouters';
import { LoginAdminScreen } from '../components/admin/auth/loginAdmin/LoginAdminScreen'
import { CreateKabumScreen } from '../components/admin/kabums/CreateKabumScreen';
import { StartScreen } from '../components/admin/start/StartScreen';
import { ShowPlayersScreen } from '../components/user/players/ShowPlayersScreen';
import { Responder } from '../components/user/players/responder';
import { cargarpregunta } from '../components/user/players/cargarpregunta';
import { NameKabumsScreen } from '../components/admin/nameKabum/NameKabumsScreen'
import { QuestionScreen } from '../components/admin/nameKabum/QuestionScreen'
import { AnswerQuestionAdminScreen } from '../components/admin/questionsAdmin/AnswerQuestionAdminScreen';
import { ResultsScreen } from '../components/admin/questionsAdmin/ResultsScreen';
import { Scoreboard } from '../components/user/players/scoreboard';
import { PodioUserScreen } from '../components/user/players/PodioUserScreen';
import { PodioUserScreen2 } from '../components/user/players/PodioUserScreen2';
import { PodioUserScreen3 } from '../components/user/players/PodioUserScreen3';
import { Pantallaconsolacion } from '../components/user/players/Pantallaconsolacion';
import { Resultados } from '../components/admin/resultados/resultados';



// PodioUser
// correcto
import { Correcto } from '../components/user/players/correcto';
import { Incorrecto } from '../components/user/players/incorrecto';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/pin" component={PinScreen} />
                    <Route exact path="/loginadmin" component={LoginAdminScreen} />
                    <Route exact path="/create" component={CreateKabumScreen} />
                    <Route exact path="/start" component={StartScreen} />
                    <Route exact path="/nameKabum" component={NameKabumsScreen} />
                    <Route exact path="/question" component={QuestionScreen} />
                    <Route exact path="/answerAdmin" component={AnswerQuestionAdminScreen} />
                    <Route exact path="/showplayers" component={ShowPlayersScreen} />
                    <Route exact path="/responder" component={Responder} />
                    <Route exact path="/cargarpregunta" component={cargarpregunta} />
                    <Route exact path="/resultadosAdmin" component={ResultsScreen} />
                    <Route exact path="/scoreboard" component={Scoreboard} />
                    <Route exact path="/correcto" component={Correcto} />
                    <Route exact path="/incorrecto" component={Incorrecto} />
                    <Route exact path="/podioprimero" component={PodioUserScreen} />
                    <Route exact path="/podiosegundo" component={PodioUserScreen2} />
                    <Route exact path="/podiotercero" component={PodioUserScreen3} />
                    <Route exact path="/consolacion" component={Pantallaconsolacion} />
                    <Route exact path="/podiumAdmin" component={Resultados} />
                    <Route path="/" component={AppInitialRouters} />
                </Switch>
            </div>
        </Router>
    )
}

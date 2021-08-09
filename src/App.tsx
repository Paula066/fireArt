import React, {FC } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss'
import {WelcomeTrivia, Entertainment, Rating} from "./views";
import {Routes} from "./constants";


const Game: FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={`${Routes.VIDEO_GAME}/:id?`}>
                        <Entertainment/>
                    </Route>
                    <Route path={Routes.RATING}>
                        <Rating/>
                    </Route>
                    <Route exact path={Routes.HOME}>
                        <WelcomeTrivia />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Game;

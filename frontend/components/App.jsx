import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import BoardsContainer from "./boards/board_index_container";
import { Route, Switch, Redirect, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () =>(
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <Route path="/" component={GreetingContainer}/>
        </Switch>

        <ProtectedRoute exact path="/boards" component={BoardsContainer}/>
    </div>
);

export default App;
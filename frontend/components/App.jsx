import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { Route, Switch, Redirect, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () =>(
    <div>
        <h2>Yollo from App Component</h2>
        <Switch>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <Route path="/" component={GreetingContainer}/>
        </Switch>
    </div>
);

export default App;
import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import BoardsContainer from "./boards/board_index_container";
import { Route, Switch, Redirect, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from './modal';
import demoContainer from "./demo_session/demo_container";
import BoardShowContainer from "./boards/board_show_container";





const App = () =>(
    <div>
        <header>
            <GreetingContainer/>
        </header>
        <Modal/>
        <Switch>
            <ProtectedRoute exact path="/boards" component={BoardsContainer}/>
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/" component={demoContainer}/>
            <Redirect to="/"/>
        </Switch>

    </div>
);

export default App;
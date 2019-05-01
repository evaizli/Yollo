import React from "react";
import ReactDOM from "react-dom";


import configureStore from "./store/store";
import Root from "./components/root";

///testing
import {login, signup, signout} from "./actions/session_actions";


document.addEventListener("DOMContentLoaded",()=>{
    let store;
    if (window.currentUser){
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
        store =configureStore();
    }
    const root = document.getElementById("root");
    ///testing
    window.login = login;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});
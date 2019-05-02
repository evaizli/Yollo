import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="navBar">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <nav className="navBar" >
            <h2 >Hi, {currentUser.name}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

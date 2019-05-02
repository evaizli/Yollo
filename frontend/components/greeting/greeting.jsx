import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <header className="fixed-up-nav">
        <nav className="navBar">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    </header>
    );
    const personalGreeting = () => (
    <header className="fixed-up-nav">
        <nav className="navBar" >
            <h2 >Hi, {currentUser.name}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

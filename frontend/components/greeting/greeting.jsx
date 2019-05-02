import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <header className="fixed-up-nav">
        <nav className="navBar">
            <i className="logo fab fa-trello"></i>
            <h2>Yollo</h2>
            <div className="space"></div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
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

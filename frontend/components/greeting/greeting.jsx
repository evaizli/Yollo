import React from "react";
import { Link } from "react-router-dom";
import DemoButtonContainer from "../demo_session/demo_container";


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <>
        <header className="fixed-up-nav">
            <nav className="navBar">
                <i className="logo fab fa-trello"></i>
                <h2>Yollo</h2>
                <div className="space"></div>
                <Link to="/login">Log In</Link>
                <Link to="/signup"><span>Sign Up</span></Link>
            </nav>
        </header>
        <section className="demo-section">
                <h2>I'm trying... 一生懸命cssを勉強します!!!</h2>
                <DemoButtonContainer />
        </section>
    </>
    );
    const personalGreeting = () => (
    <header className="login-nav">
        <nav className="loginBar" >
            <h2 >Hi, {currentUser.name}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

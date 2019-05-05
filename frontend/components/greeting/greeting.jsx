import React from "react";
import { Link } from "react-router-dom";
import DemoButtonContainer from "../demo_session/demo_container";
import BoardsContainer from "../boards/board_index_container";


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
                <DemoButtonContainer />
                <br/>
        </section>
    </>
    );
    const personalGreeting = () => (
    <header className="login-nav">
        <nav className="loginBar" >
            <h2 >Hi, {currentUser.name}!</h2>
                <h2>this site in under construction. come back soon. 一生懸命 やります</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
        <div>
            <BoardsContainer/>
        </div>
    </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

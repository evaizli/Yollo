import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    <>
        <header className="fixed-up-nav">
            <nav className="navBar">
                <Link to="/" className="splash-logo-link">
                    <i className="logo fab fa-trello"></i>
                    <h2>Yollo</h2>
                </Link>
            
                <div className="space1"></div>
                <Link to="/login">Log In</Link>
                <Link to="/signup"><span>Sign Up</span></Link>
            </nav>
        </header>

    </>
    );
    const personalGreeting = () => (
    <header className="fixed-login-nav">
        <nav className="login-nav-bar-container" >
            <Link to="/boards">
                <i className="home-logo fas fa-home"></i>
            </Link>
            <Link to="/boards" className="logo-board-container">
                <i className="login-logo-board fab fa-trello"></i>
                <div className="board-index-link">Boards</div>
            </Link>
            <div className="space2"></div>

            <Link to="/boards" className="logo-site-container">
                <i className="login-logo fab fa-trello"></i>
                <h2 className="site-logo">Yollo</h2>
            </Link>

            <div className="space2"></div>
            
            {/* <div className="create-board-container"> */}
                {/* <i className="add-board fas fa-plus"></i> */}
            {/* </div> */}
            <button className="logout-button" onClick={logout}>Log Out</button>
        </nav>
    </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

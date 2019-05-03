import React from 'react';

class DemoButton extends React.Component{
    constructor(props){
        super(props);
        this.submitDemoUser = this.submitDemoUser.bind(this);
    }

    submitDemoUser(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, { email: "testing@testing.com", password: "password" });
        this.props.processForm(demoUser);
    }

    render(){
        return(
            <>
            <div className="demo-user-container">
                <p className="tag-line-message">
                    Yollo lets you work more collaboratively and get more done. 
                </p>
                <p className="sub-tag-line-message">
                    Yoll's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexiable, and rewarding way.
                </p>
                <input type="submit-demo-user" type="submit" value="Demo Log In" onClick={this.submitDemoUser}/>
                <img className="hero-image-demo" src="hero-a.svg" alt=""/>

            </div>
            </>
        );
    }

}

export default DemoButton;
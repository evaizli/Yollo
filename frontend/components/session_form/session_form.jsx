import React from 'react';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDemoUser = this.submitDemoUser.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field){
        return e=> this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        // .then(
        //     ()=> this.props.history.push("/")
        // );
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderNameInput(){
        if (this.props.formType === "signup"){
            return(
                <div>
                <br/>
                <label>Name:
                    <input type="text"
                    value={this.state.name}
                    onChange={this.update("name")} 
                    placeholder="e.g., Alexander Hamilton"/>
                </label>
                </div>
            );
        }
    }

    renderMessage(){
        return this.props.formType === "signup" ?  "Create a Yollo Account" : "Log in to Yollo";
    }

    renderSubmitValue(){
        return this.props.formType === "signup" ? "Create New Account" : "Log In"; 
    }

    renderDemo(){
        return this.props.formType !== "signup" ? 
        <input className="demo-submit" type="submit" value="Demo Login" onClick={this.submitDemoUser} /> : "";
    }

    submitDemoUser(e){
        e.preventDefault();
        const demoUser = Object.assign({}, {email: "testing@testing.com", password: "password"});
        this.props.processForm(demoUser);
    }
    


    render(){
        return(
            <div className="login-container">
                <div className="login-form-container">
                    <div className="errors">{this.renderErrors()} </div>
                    <h1>{this.renderMessage()}</h1>
                    <div className="form-type-switch-link">{this.props.navLink}</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {this.renderNameInput()}
                        <br/>
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update("email")}
                                    placeholder="e.g., Hamilton@Broadway.com"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                placeholder="eg., *******"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.renderSubmitValue()}/>
                        {this.renderDemo()}
                    </div>

                </form>
                </div>
            </div>
        );
    }

}

export default SessionForm;

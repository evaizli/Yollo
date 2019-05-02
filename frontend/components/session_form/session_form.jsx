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
                    onChange={this.update("name")} />
                </label>
                </div>
            );
        }
    }

    renderMessage(){
        if (this.props.formType === "signup"){
            return(
             "Create a Yollo Account"   
            );
        } else{
            return(
                "Log in to Yollo"
            );
        }
    }

    renderSubmitValue(){
        if (this.props.formType === "signup") {
            return (
                "Create New Account"
            );
        } else {
            return (
                "Log In"
            );
        }
    }

    submitDemoUser(e){
        e.preventDefault();
        const demoUser = Object.assign({}, {email: "testing@testing.com", password: "password"});
        this.props.processForm(demoUser);
    }
    


    render(){
        return(
            <section>
            <div className="login-form-container">
                    <h1>{this.renderMessage()}</h1>
                    <div className="form-type-switch-link">{this.props.navLink}</div>
                    {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {this.renderNameInput()}
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update("email")}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.renderSubmitValue()}/>
                    </div>

                </form>

            </div>
        </section>
        );
    }

}

export default SessionForm;

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
    


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    {this.renderMessage()}
                    <br/>
                    {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        {this.renderNameInput()}
                        <label>Email:
                            <input type="text"
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
                        <input type="submit" value={this.renderSubmitValue()}/>
                    </div>

                </form>
            </div>
        );
    }

}

export default SessionForm;

import React from 'react';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
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



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Welcome to Yollo!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
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
                        <input type="submit" value={this.props.formType}/>
                    </div>

                </form>
            </div>
        );
    }

}

export default SessionForm;

import React from "react";

class CreateCardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            list_id: this.props.listId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state);
        this.setState({ title: "" });
    }

    render(){
        
        return(
            <div className="create-card-form-container">
                <form className="create-card-form"onSubmit={this.handleSubmit}>
                    <input 
                        className = "create-card-text-input"
                        type="text" 
                        value ={this.state.title}
                        onChange={this.update("title")}
                        placeholder = "+ Add another card"
                    />
                    <input 
                        className="create-card-button" 
                        type="submit" 
                        value ={this.props.formType}
                    />
                </form>
            </div>
        );
    }
}


export default CreateCardForm;
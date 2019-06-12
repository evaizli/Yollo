import React from "react";
import Textarea from 'react-textarea-autosize';

class CreateCardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            list_id: this.props.listId,
            createCardMode: false 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleCreateMode = this.toggleCreateMode.bind(this);
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

    toggleCreateMode(){
        this.setState({createCardMode: !this.state.createCardMode});
    }

    createCard(){
        if (this.state.createCardMode){
            return (
                <input
                    className="create-card-button"
                    type="submit"
                    value={this.props.formType}
                />
            );
        } 
        
    }

    render(){
        
        return(
            <div className="create-card-form-container">
                <form className="create-card-form"onSubmit={this.handleSubmit}>
                    <Textarea
                        className = "create-card-text-input"
                        type="text" 
                        value ={this.state.title}
                        onClick = {() => this.setState({createCardMode: true})}
                        onChange={this.update("title")}
                        placeholder = "+ Add another card"
                    />
                    {this.createCard()}
                </form>
            </div>
        );
    }
}


export default CreateCardForm;
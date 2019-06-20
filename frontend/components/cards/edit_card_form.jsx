import React from "react";

class EditCardForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.card.title,
            id: this.props.card.id,
            editMode: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.toggleEditMode());
    }

    render(){
        return(
            <div>
                <form className="edit-card-form" onSubmit={this.handleSubmit}>
                    <input className="edit-card-title-input"
                        type="text"
                        value="title"
                        onChange={this.update("title")}/>
                    <input className="edit-card-title-submit-button" type="submit" value="Update Title"/>
                </form>
            </div>
        );
    }

}

export default EditCardForm;
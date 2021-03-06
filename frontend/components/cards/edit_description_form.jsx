import React from "react";

class EditDescriptionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateCard(this.state).then(() => {
            return this.props.toggleEditMode();
        });
    }

    render(){
    
        let description = (this.state.description === null) ? undefined : this.state.description;
        return(
            <div>
                <form className="card-show-edit-description-form-container" onSubmit={this.handleSubmit}>
                    <div className="card-show-textarea-wrapper">
                        <textarea 
                            className="card-show-description-input"
                            value={description} 
                            onChange={this.update("description")}
                            placeholder="Add a more detailed description"
                        >
                        </textarea>
                    </div>
                    <input 
                        className="card-show-description-edit-button"
                        type="submit"
                        value="Save"
                    />
                </form>

            </div>
        );
    }
}

export default EditDescriptionForm;
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


    componentDidUpdate(prevProps){
        // if (prevProps.card.description !== this.props.card.description) {


        // };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateCard(this.state).then(() => this.props.toggleEditMode());
    }

    render(){
        // debugger
        return(
            <div>
                <form onClick={this.handleSubmit}>
                    <input 
                        className="card-show-description-input"
                        value={this.state.description} 
                        onChange={this.update("description")}
                        placeholder="Add a more detailed description">
                    </input>
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
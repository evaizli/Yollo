import React from "react";
import { withRouter } from 'react-router-dom';
import AutosizeInput from 'react-input-autosize';
import Textarea from 'react-textarea-autosize';


class CreateListForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            board_id: this.props.match.params.boardId,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.setState({title: ""});
    }
    toggleForm(){
        if (this.props.formType === "Create List"){
            return(
                <form className="create-list-form" onSubmit={this.handleSubmit}>
                    <Textarea
                        className="create-list-text-input"
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        placeholder="+ Add another list"
                    />
                    <input
                        className="create-list-button"
                        type="submit"
                        value={this.props.formType}
                    />
                </form>
            );
        }
    }
    

    render(){
        return(
            <div className="create-list-form-container">
                {this.toggleForm()}
            </div>
        );
    }
}

export default withRouter(CreateListForm);
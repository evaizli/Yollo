import React from "react";

export default class BoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formTypeToggle = this.formTypeToggle.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.formType === "Create Board"){
            this.props.processForm(this.state)
            .then(()=> this.props.closeModal());
        } else if (this.props.formType === "Edit Board") {
            this.props.processForm(this.state).then(() => this.props.toggleEditMode());
        }
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    formTypeToggle(){
        if (this.props.formType === "Create Board"){
            return(
                <div className="create-board-form-modal-container">
                    <form className="create-board-modal-input-form" onSubmit={this.handleSubmit}>
                        <input
                            className="create-board-modal-input"
                            type="text"
                            value={this.state.title}
                            placeholder="Add Project Name"
                            onChange={this.update("title")}
                        />
                        <input type="submit" value={this.props.formType} className="create-board-button" />
                    </form>
                </div>
            );
        } else if (this.props.formType === "Edit Board"){
            const {title} = this.state; 
            return(
                    <form className="board-show-title-edit-container" onSubmit={this.handleSubmit}>
                        <input
                            className="board-show-title-edit-input"
                            type="text"
                            value={title}
                            onChange={this.update("title")}
                        />
                    <input className="board-title-update-button" type="submit" value="Update title"/>
                    </form>
            );
        }
    }

    render(){
        return(
            <>
            {this.formTypeToggle()}
            </>
        );
    }

}

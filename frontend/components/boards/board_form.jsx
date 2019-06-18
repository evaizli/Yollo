import React from "react";

export default class BoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.board.title};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.formType === "Create Board"){
            this.props.processForm(this.state)
            .then(()=> this.props.closeModal());
        } else if (this.props.formType === "Edit Board") {
            this.props.processForm(this.state);
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
                        <input className="create-board-modal-button" type="submit" value={this.props.formType} className="create-board-button" />
                    </form>
                </div>
            )
        } else if (this.props.formType === "Edit Board"){
            return(
                    <form className="create-board-modal-input-form" onSubmit={this.handleSubmit}>
                        <input
                            className="create-board-modal-input"
                            type="text"
                            value={this.state.title}
                            placeholder="Add Project Name"
                            onChange={this.update("title")}
                        />
                        <input className="create-board-modal-button" type="submit" value={this.props.formType} className="create-board-button" />
                    </form>
            );
        }
    }

    render(){
        return(
            <>
            {this.formTypeToggle()};
            </>
        );
    }

}

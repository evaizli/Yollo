import React from "react";

export default class BoardForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {title: props.board.title};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBoard(this.state).then(()=> this.props.closeModal());
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        return(
            <div className="create-board-form-modal-container">
                <form className="create-board-modal-input-form" onSubmit={this.handleSubmit}>                
                    <input 
                        className="create-board-modal-input"
                        type="text" 
                        value={this.state.title}
                        placeholder="Add board title" 
                        onChange={this.update("title")}
                    />
                    <input className="create-board-modal-buttom" type="submit" value="Create Board" className="create-board-button"/>
                </form>
            </div>
        );
    }

}

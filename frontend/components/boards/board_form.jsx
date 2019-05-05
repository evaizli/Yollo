import React from "react";

class BoardForm extends React.Component{
    constructor(props){
        super(props);
        this.props = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBoard(this.state);
    }

    update([field]){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        return(
            <div className="board-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-title">
                        <input 
                            type="text" 
                            value={this.board.title}
                            placeholder="Add board title" 
                            onChange={this.update("title")}
                        />
                    </div>
                    <button className="create-board-button">Create new board...</button>
                </form>
            </div>
        );
    }

}

export default BoardForm;
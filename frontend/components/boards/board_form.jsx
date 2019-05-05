import React from "react";

export default class BoardForm extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.state = {title: props.board.title};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBoard(this.state);
        this.props.closeModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        return(
            <div className="board-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-title">
                        <input 
                            type="text" 
                            value={this.state.title}
                            placeholder="Add board title" 
                            onChange={this.update("title")}
                        />
                    </div>
                    <input type="submit" value="Create Board" className="create-board-button"/>
                </form>
            </div>
        );
    }

}

// export default BoardForm;
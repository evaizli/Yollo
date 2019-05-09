import React from "react";
import { withRouter } from 'react-router-dom';


class CreateListForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            board_id: this.props.match.params.boardId
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
        this.props.createList(this.state);
        this.setState({title: ""});
    }

    render(){
        // debugger
        return(
            <div className="create-list-form-container">
                <form className="create-list-form" onSubmit={this.handleSubmit}>
                    <input 
                        className="create-list-text-input"
                        type="text" 
                        value={this.state.title} 
                        onChange={this.update("title")}
                        placeholder="+ Add another list"
                    />
                    <input className="create-list-buttom" type="submit" value={this.props.formType}/>
                </form>
            </div>
        );
    }
}

export default withRouter(CreateListForm);
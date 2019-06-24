import React from "react";
import Textarea from 'react-textarea-autosize';

class CreateCardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            list_id: this.props.listId,
            editMode: false 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleCreateMode = this.toggleCreateMode.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state);
        this.setState({ title: "" });
    }

    toggleCreateMode(){
        this.setState({eidtMode: !this.state.editMode});
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickEvent);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickEvent);
    }
    handleClickEvent(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ editMode: false, title: "" });
        }
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    createCard(){
        // debugger
        if (this.state.editMode){
            return (
                <input
                    className="create-card-button"
                    type="submit"
                    value={this.props.formType}
                    onClick={this.handleSubmit}
                    ref={this.setWrapperRef}
                />
            );
        }   
    }


    render(){
        // debugger
        return(
            <div className="create-card-form-container" >
                <form className="create-card-form" >
                    <Textarea
                        className = "create-card-text-input"
                        type="text" 
                        value ={this.state.title}
                        onClick = {() => this.setState({editMode: true})}
                        onChange={this.update("title")}
                        placeholder = "+ Add another card"
                    />
                    {this.createCard()}
                </form>
            </div>
        );
    }
}


export default CreateCardForm;
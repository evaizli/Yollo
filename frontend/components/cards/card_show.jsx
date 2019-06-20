import React from "react";
import EditDescriptionContainer from "./edit_description_container";
import EditCardContainer from "./edit_description_container";
import { closeModal } from "../../actions/modal_actions";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            descriptionEditMode: false,
            titleEditMode: false
        };
        this.toggleDescriptionEditMode = this.toggleDescriptionEditMode.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    toggleDescriptionEditMode(){
        this.setState({ descriptionEditMode: !this.state.descriptionEditMode});
    }

    toggleDescriptions(){ 
        return (this.state.descriptionEditMode) ? <EditDescriptionContainer toggleEditMode={this.toggleDescriptionEditMode} 
            card={this.props.card}/> : this.props.card.description;
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickEvent);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickEvent);
    }
    handleClickEvent(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ descriptionEditMode: false});
        }
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    render(){
        const {id, title, description, dueDate} = this.props.card;
        return (
            <div className="card-show-container">
                <div className="card-show-card-title">
                    {title}
                </div>
                <div className="card-show-list-title">in list {this.props.listTitle}</div>

                <div>
                    <h2 className="card-show-description-title">Description</h2>
                    <div 
                        className="card-show-task-description-container" 

                        onClick={()=> this.setState({descriptionEditMode: true})} ref={this.setWrapperRef}>
                        {this.toggleDescriptions()}
                    </div>
                </div>


                <button 
                    className="card-show-remove-card-button"
                    onClick={()=>{this.props.deleteCard(id); this.props.closeModal();}}>  
                    Delete Card          
                </button>

            </div>
        );
    }
}

export default CardShow;
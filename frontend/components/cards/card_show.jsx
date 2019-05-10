import React from "react";
import EditDescriptionContainer from "./edit_description_container";
import { closeModal } from "../../actions/modal_actions";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: this.props.card,
            editMode: false,
            deleteCard: this.props.deleteCard,
            closeModal: this.props.closeModal,
            listTitle: this.props.listTitle

        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode(){
        this.setState({editMode: !this.state.editMode});
    }

    // need to create for on submit & bind this 
    descriptions(){ 
        return (this.state.editMode) ? <EditDescriptionContainer 
            toggleEditMode={this.toggleEditMode} 
            card={this.state.card}/> : this.state.card.description;
    }
    

    render(){
        const {id, title, description, dueDate} = this.state.card;
        
        return (
            <div className="card-show-container">
                <div className="card-show-card-title">{title}</div>
                <div className="card-show-list-title">{this.state.listTitle}</div>

                <div>
                    <h2>description</h2>
                    <div 
                        className="card-show-task-description-container" 

                        onClick={()=> this.setState({editMode: true})}>
                        {this.descriptions()}
                    </div>
                </div>

                {/* <div className="card-show-card-due-date-title"> Due Date:</div>
                <div className="card-show-card-due-date">{dueDate}</div> */}
                <button 
                    className="card-show-remove-card-button"
                    onClick={()=>{this.state.deleteCard(id); this.state.closeModal();}}>  
                    Delete Card          
                </button>

            </div>
        );
    }
}

export default CardShow;
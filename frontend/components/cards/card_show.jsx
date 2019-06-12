import React from "react";
import EditDescriptionContainer from "./edit_description_container";
import { closeModal } from "../../actions/modal_actions";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: false
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode(){
        this.setState({editMode: !this.state.editMode});
    }

    descriptions(){ 
        return (this.state.editMode) ? <EditDescriptionContainer toggleEditMode={this.toggleEditMode} 
            card={this.props.card}/> : this.props.card.description;
    }


    render(){
        const {id, title, description, dueDate} = this.props.card;
        return (
            <div className="card-show-container">
                <div className="card-show-card-title">{title}</div>
                <div className="card-show-list-title">in list {this.props.listTitle}</div>

                <div>
                    <h2 className="card-show-description-title">Description</h2>
                    <div 
                        className="card-show-task-description-container" 

                        onClick={()=> this.setState({editMode: true})}>
                        {this.descriptions()}
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
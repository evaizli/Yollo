import React from "react";
import EditDescriptionContainer from "./edit_description_container";
import { closeModal } from "../../actions/modal_actions";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: this.props.card,
            editMode: false,

        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode(){
        this.setState({editMode: !this.state.editMode});
    }

    descriptions(){ 
        return (this.state.editMode) ? <EditDescriptionContainer toggleEditMode={this.toggleEditMode} 
            card={this.state.card}/> : this.state.card.description;
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevState.card.description !== this.props.card.description){
            this.setState({card: this.props.card});
        }
    }
    

    render(){
        const {id, title, description, dueDate} = this.state.card;
        return (
            <div className="card-show-container">
                <div className="card-show-card-title">{title}</div>
                <div className="card-show-list-title">{this.props.listTitle}</div>

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
                    onClick={()=>{this.props.deleteCard(id); this.props.closeModal();}}>  
                    Delete Card          
                </button>

            </div>
        );
    }
}

export default CardShow;
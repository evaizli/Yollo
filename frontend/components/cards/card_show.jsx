import React from "react";
import AddCardDetailContainer from "./edit_description_container";
import { closeModal } from "../../actions/modal_actions";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: this.props.card,
            editMode: false,
            deleteCard: this.props.deleteCard,
            closeModal: this.props.closeModal

        };
    }


    //need to create for on submit & bind this 
    descriptions(){ 
        return (this.state.editMode) ? <EditDescriptionContainer card={this.state.card}/> : this.state.card.description;
    }
    

    render(){
        const {id, title, description, dueDate} = this.state.card;
        
        return (
            <div>
                <h2>{title}</h2>

                <div>
                    <h2>description</h2>
                    <div onClick={()=> this.setState({editMode: true})}>{this.descriptions()}</div>
                </div>
                <button onClick={()=>{this.state.deleteCard(id); this.state.closeModal();}}>Delete Card</button>

            </div>
        );
    }
}

export default CardShow;
import React from "react";
import AddCardDetailContainer from "./add_card_detail_container";

class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.card;
    }

    //need to create for on submit & bind this 
    descriptions(){ 
       return (this.state.description.length === 0) ? "no description" : this.state.description;
    }
    

    render(){
        const {title, description, dueDate} = this.state;
        
        return (
            <div>
                <h2>{title}</h2>

                <div>
                    <h2>description</h2>
                    {this.descriptions()}
                </div>

            </div>
        );
    }
}

export default CardShow;
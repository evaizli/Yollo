import React from 'react';
import CardIndexItem from "./card_index_item";
import CreateCardFormContainer from "./create_card_form_container";


const CardIndex = (props) =>{
    const cards = Object.values(props.cards).map((card) => {
        return(
            <CardIndexItem 
                key={card.id}
                card={card}
                openModal = {props.openModal}
            />
        );
    });

    return(
        <div className="card-index-container">
                {cards}
                <CreateCardFormContainer listId={props.listId}/>
        </div>
    );
};


export default CardIndex;
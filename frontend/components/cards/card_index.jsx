import React from 'react';
import CardIndexItem from "./card_index_item";

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
        <div>
            {cards}
        </div>
    );
};


export default CardIndex;
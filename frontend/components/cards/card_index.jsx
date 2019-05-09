import React from 'react';
import CardIndexItem from "./card_index_item";
import CreateCardContainer from "./create_card_container";

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
            {/* <CreateCardContainer /> */}
        </div>
    );
};


export default CardIndex;
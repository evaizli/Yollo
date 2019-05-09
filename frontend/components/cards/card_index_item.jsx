import React from 'react';

const CardIndexItem = ({card, updateList, openModal}) =>{
    return(
        <div className="card-index-div" onClick={ () => openModal(card.id)}>   
            {card.title}
        </div>
    );
};


export default CardIndexItem;
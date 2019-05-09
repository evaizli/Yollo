import React from 'react';


const CardIndexItem = ({card, updateList, openModal, listId}) =>{
    return(
        <>
            <div className="card-index-div" onClick={ () => openModal(card.id)}>   
                {card.title}
            </div>
            
        </>
    );
};


export default CardIndexItem;
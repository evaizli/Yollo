import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexContainer from "../cards/card_index_container";



const ListIndexItem = (props) => {
    const {deleteList, list, cards, updateList} = props;
    return(
        <>
        <li className="list-index-item-li"> 
            <div className="list-index-item-nav">
                <h2 className="list-index-item-title">{props.list.title}</h2>
                <div className="space"></div>
                <button className="delete-list-buttom" onClick={() => deleteList(list.id)}>Delete</button>
            </div>
            <CardIndexContainer cards={cards} />
        </li>
        </>
    );

};

export default ListIndexItem;
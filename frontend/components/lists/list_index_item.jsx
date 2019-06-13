import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexContainer from "../cards/card_index_container";



const ListIndexItem = (props) => {
    const {deleteList, list, cards, updateList} = props;
    return(
        <>
        <li className="list-index-item-li"> 
            {/* <div className="list-index-items-inner"> */}
                <div className="list-index-item-nav">
                    <h2 className="list-index-item-title">{props.list.title}</h2>
                    <div className="space"></div>
                    <button className="delete-list-button" title="delete?" onClick={() => deleteList(list.id)}>
                        <i className="delete-tool-tip-container fas fa-trash-alt">
                        </i>
                    </button>
                </div>
                <CardIndexContainer listId={list.id} cards={cards} />
             {/* </div> */}
        </li>
        </>
    );

};

export default ListIndexItem;
import React from 'react';
import { Link } from 'react-router-dom';
import { debug } from 'util';
import CardIndex from "../cards/card_index";


const ListIndexItem = (props) => {
    const {deleteList, list, cards} = props;
    return(
        <li>
            <h2>{props.list.title}</h2>
            <button onClick={() => deleteList(list.id)}>Delete</button>
            <CardIndex cards={cards}/>
        </li>
    );

};

export default ListIndexItem;
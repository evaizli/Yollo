import React from 'react';
import { Link } from 'react-router-dom';
import { debug } from 'util';

const ListIndexItem = (props) => {
    return(
        <li>
            <h2>{props.list.title}</h2>
            <button onClick={() => props.deleteList(props.list.id)}>Delete</button>
        </li>
    );

};

export default ListIndexItem;
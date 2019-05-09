import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexContainer from "../cards/card_index_container";
import CreateListForm from "./create_list_form";
import EditListFormContainer from "./edit_list_form_container";


const ListIndexItem = (props) => {
    const {deleteList, list, cards, updateList} = props;
    return(
        <>
        <li className="list-index-item-li">
            {/* <EditListFormContainer list={list} /> */}
            <h2>{props.list.title}</h2>
            <button onClick={() => deleteList(list.id)}>Delete</button>
            <CardIndexContainer cards={cards} />
        </li>
        </>
    );

};

export default ListIndexItem;
import React from 'react';
import { Link } from 'react-router-dom';
import CardIndex from "../cards/card_index";
import CreateListForm from "./create_list_form";
import EditListForm from "./edit_list_form";


const ListIndexItem = (props) => {
    const {deleteList, list, cards, updateList} = props;
    return(
        <>
        <li className="list-index-item-li">
            <EditListForm updateList={updateList} />
            <h2>{props.list.title}</h2>
            <button onClick={() => deleteList(list.id)}>Delete</button>
            <CardIndex cards={cards} updateList={updateList}/>
        </li>
             {/* <CreateListForm updateList={updateList}/> */}
        </>
    );

};

export default ListIndexItem;
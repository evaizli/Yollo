import React from "react";
import { Link } from "react-router-dom";
import  ListIndexItem from "./list_index_item";

class ListIndex extends React.Component{

    render(){
        const { lists, deleteList, updateList, createList, cards} = this.props;
        let listIndex = Object.values(lists).map( list => {
            return(
                <ListIndexItem 
                    key={list.id}
                    list={list}
                    deleteList={deleteList}
                    cards = {cards}
                />
            );
        });
        return(
            <div>
                <ul>
                    {listIndex}
                </ul>
            </div>
        );
    }

}

export default ListIndex;
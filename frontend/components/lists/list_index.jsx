import React from "react";
import { Link } from "react-router-dom";
import  ListIndexItem from "./list_index_item";

class ListIndex extends React.Component{

    render(){
        // const { lists, deleteList, updateList, createList } = this.props;
        // // debugger
        let listIndex = Object.values(this.props.lists).map( list => {
            // debugger
            return(
                <ListIndexItem 
                    key={list.id}
                    list={list}
                    deleteList={this.props.deleteList}
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
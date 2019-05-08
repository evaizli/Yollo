import React from "react";
import { Link } from "react-router-dom";
import  ListIndexItemContainer from "./list_index_item_container";
// import CreateListForm from "./create_list_form";
import CreateListFormContainer from "./create_list_form_container";

class ListIndex extends React.Component{

    render(){
        const { lists, deleteList, updateList, createList, cards} = this.props;
        let listIndex = lists.map( list => {
            
            return(
                <ListIndexItemContainer 
                    key={list.id}
                    list={list}
                    cardIds={list.cardIds}
                />
            );
        });
        return(

                <div>
                    <ul className="list-title-ul">
                        {listIndex}
                        <CreateListFormContainer />
                    </ul>
                </div>
        );
    }

}

export default ListIndex;
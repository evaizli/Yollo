import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexContainer from "../cards/card_index_container";
import EditListContainer from "../lists/edit_list_form_container";

class ListIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            editMode: false
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickEvent);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickEvent);
    }
    handleClickEvent(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ editMode: false });
        }
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    toggleEditTitleView(){
        return (this.state.editMode) ? <EditListContainer list={this.props.list} 
        toggleEditMode = {this.toggleEditMode}/> : this.props.list.title;
    }

    render(){
        const {deleteList, list, cards} = this.props;
        return(
            <>
            <li className="list-index-item-li"> 
                    <div className="list-index-item-nav">
                        <div className="list-index-item-title"
                            onClick={()=> this.setState({editMode: true})}
                            ref = {this.setWrapperRef}>
                            {this.toggleEditTitleView()}
                        </div>
                        <div className="space"></div>
                        <button className="delete-list-button" title="delete?" onClick={() => deleteList(list.id)}>
                            <i className="delete-tool-tip-container fas fa-trash-alt">
                            </i>
                        </button>
                    </div>
                    <CardIndexContainer listId={list.id} cards={cards} />
            </li>
            </>
        );

    }
}
export default ListIndexItem;
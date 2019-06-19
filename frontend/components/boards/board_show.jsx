import React from "react";
import { Link } from "react-router-dom";
import ListIndexContainer from "../lists/list_index_container";
import EditBoardContainer from "../boards/edit_board_container";

class BoardShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount(){
     
        let boardId = this.props.match.params.boardId;
        this.props.fetchBoard(parseInt(boardId));
        document.addEventListener("mousedown", this.handleClickEvent);
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.match.params.boardId !== this.props.match.params.boardId){
            this.props.fetchBoard(this.props.match.params.boardId);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickEvent);
    }

    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    }

    toggleEditView(){
        let boardId = this.props.match.params.boardId;
        return (this.state.editMode) ? <EditBoardContainer boardId={boardId}
            toggleEditMode={this.toggleEditMode}/> : this.props.board.title;
    }

    handleClickEvent(event){
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({editMode: false});
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }


    render() {
        const {board} = this.props;
        if (!board){
            return null;
        } else{
            return(
                <div>
                    <div className="board-show">
                        <div className ="board-show-navbar"
                            onClick={() => this.setState({ editMode: true })} 
                            ref={this.setWrapperRef}>
                            {this.toggleEditView()}
                        </div>
                    </div>
                    <div className="board-show-list-index-container">
                        <ListIndexContainer/>
                    </div>
                </div>
            );
        }
    }
}

export default BoardShow;
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
    }

    componentDidMount(){
     
        let boardId = this.props.match.params.boardId;
        this.props.fetchBoard(parseInt(boardId));
        // document.getElementsByClassName("board-show-navbar").addEventListener("target", () => this.setState({editMode: false}));
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.match.params.boardId !== this.props.match.params.boardId){
            this.props.fetchBoard(this.props.match.params.boardId);
        }
    }

    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    }

    toggleEditView(){
        let boardId = this.props.match.params.boardId;
        return (this.state.editMode) ? <EditBoardContainer boardId={boardId}/> : this.props.board.title;
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
                            onClick={() => this.setState({editMode: true})}>
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
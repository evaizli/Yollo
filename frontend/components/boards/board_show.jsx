import React from "react";
import { Link } from "react-router-dom";
import ListIndexContainer from "../lists/list_index_container";

class BoardShow extends React.Component {
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){
        let boardId = this.props.match.params.boardId;
        this.props.fetchBoard(parseInt(boardId));
    }

    // componentDidUpdate(prevProps){
    //     if (prevProps.board.id !== this.props.match.params.boardId){
    //         this.props.fetchBoard(this.props.match.params.boardId);
    //     }
    // }

    render() {
        const { board} = this.props;
        if (!board){
            return null;
        } else{
            return(
                <div>
                    <div className="board-show">
                        <div className ="board-show-navbar">
                            {board.title}
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
import React from "react";
import { Link } from "react-router-dom";
import ListIndexContainer from "../lists/list_index_container";

class BoardShow extends React.Component {

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
        const { board, lists, cards } = this.props;
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
                    <ul>
                        <li> 
                          <ListIndexContainer lists={lists}/>
                        </li>
                    </ul>
                </div>
            );
        }
    }
}

export default BoardShow;
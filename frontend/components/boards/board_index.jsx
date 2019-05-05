import React from "react";
import { Link } from "react-router-dom";


class Boards extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.receiveBoards();
    }

    render(){
        const boards = this.props.boards.map(board =>{
            return(
                <Link key={board.id} to={`boards/${board.id}`}>{board.title}</Link> 
            );
        });
        return(
            <div className="board-index-main">
                <div className="all-boards">
                    <div className="header">
                        <h3>Personal Boards</h3>
                    </div>
                    <ul>
                        {boards}
                    </ul>
                </div>
            </div>
        );

    }

}
export default Boards;
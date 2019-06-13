import React from "react";
import { Link } from "react-router-dom";

class Boards extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchBoards();
    }


    render(){
        const boards = this.props.boards.map(board =>{
            return(
                <Link to={`boards/${board.id}`} key={board.id}>
                    <li className="board-index-board-title">
                        {board.title}
                    </li>
                </Link> 
            );
        });
        return(
            <div className="board-index-main">
      
                    <div className="side-navbar-container">
                        <h2></h2>
                    </div>

                    <div className="boards-container">
                        <div className="board-table-header">
                            <div className="board-index-section-title">Personal Boards</div>
                        </div>
                        <ul>
                            {boards}
                            <div className="create-board-container" onClick={() => this.props.openModal()}>
                            <button className="create-board-button" >Create a New Board</button>
                            </div>
                        </ul>
                    </div>
                </div>
        );

    }

}
export default Boards;
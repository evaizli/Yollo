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
                <li key={board.id}>
                <Link to={`boards/${board.id}`}>{board.title}</Link> 
                </li>
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
                    <button className="create-board-button" onClick={()=>this.props.openModal()}>Create new board...</button>
                </div>
            </div>
        );

    }

}
export default Boards;
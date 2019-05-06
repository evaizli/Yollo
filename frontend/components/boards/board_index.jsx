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
                <div>
                    <div className="side-navbar-container">
                        <h2>side bar space holder</h2>
                    </div>

                    <div className="boards-container">
                        <div className="board-table-header">
                            <h3>Personal Boards</h3>
                        </div>
                        <ul>
                            {boards}
                            <button className="create-board-button" onClick={()=>this.props.openModal()}>Create new board...</button>
                        </ul>
                    </div>
                </div>
            </div>
        );

    }

}
export default Boards;
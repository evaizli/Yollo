import {connect} from "react-redux";
import { updateBoard } from "../../actions/board_actions";
import BoardForm from "./board_form";
import {openModal, closeModal} from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) =>{
    let board = state.entities.boards[ownProps.boardId];
    return{
        board,
        formType: "Edit Board"
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (board) => dispatch(updateBoard(board))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
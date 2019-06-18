import { connect } from "react-redux";
import {createBoard} from "../../actions/board_actions";
import BoardForm from "./board_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state =>({
    board: {title: ""},
    formType: "Create Board"
});

const mapDispatchToProps = dispatch => ({
    processForm: (board) => dispatch(createBoard(board)),
    openModal: ()=> dispatch(openModal("create board")),
    closeModal: ()=> dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);



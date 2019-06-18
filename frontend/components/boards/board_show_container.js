import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import BoardShow from "./board_show";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    let boardId = ownProps.match.params.boardId;
    let board = state.entities.boards[boardId];
    let lists = state.entities.lists;
    let cards = state.entities.cards;
    return ({
       board: board,
       lists: lists,
       cards: cards
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        // openModal: () => dispatch(openModal("edit board"))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);


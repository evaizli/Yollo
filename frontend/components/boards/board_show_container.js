import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import BoardShow from "./board_show";

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
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);


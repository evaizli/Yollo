import { connect } from "react-redux";
import Boards from "./board_index";
import { fetchBoards } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = state =>{
    return({
        boards:Object.values(state.entities.boards)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchBoards: () => dispatch(fetchBoards()),
        openModal: () => dispatch(openModal("create board"))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
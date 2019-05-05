import { connect } from "react-redux";
import Boards from "./board_index";
import { receiveBoards } from "../../actions/board_actions";


const mapStateToProps = state =>{
    return({
        boards:Object.values(state.entities.boards)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        receiveBoards: () => dispatch(receiveBoards())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
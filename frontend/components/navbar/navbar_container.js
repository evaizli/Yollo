import { connect } from "react-redux";
import NavBar from "./navbar";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state)=>({});
const mapDispatchToProps = dispatch => ({
    profileDropdown: (
        <button onClick={() => dispatch(openModal("profile dropdown"))}>
            TU
        </button>
    ),
    boardsDropdown:(
        <button className="boards-button" onClick={() => dispatch(openModal("boards drowndown"))}><i className="fas fa-bars"></i>
            Boards
        </button>
    )

});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
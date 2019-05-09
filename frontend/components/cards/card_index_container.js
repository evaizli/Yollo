import { connect } from "react-redux";
import CardIndex from "./card_index";
import { deleteCard, updateCard, createCard } from "../../actions/card_actions";
import { openModal } from "../../actions/modal_actions";


const mapDispatchToProps = dispatch => {
    return ({
        deleteCard: (id) => dispatch(deleteCard(id)),
        updateCard: (list) => dispatch(updateCard(list)),
        createCard: (list) => dispatch(createCard(list)),
        openModal: (id) => dispatch(openModal("open card", {id: id}))
    });
};

export default connect(null, mapDispatchToProps)(CardIndex);

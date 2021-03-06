import { connect } from "react-redux";
import CardShow from "./card_show";
import { deleteCard } from "../../actions/card_actions";
import { closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
    const listId = state.entities.cards[ownProps.id].listId;
    const listTitle = state.entities.lists[listId].title;
    return ({
        card: state.entities.cards[ownProps.id],
        listTitle:listTitle

    });
};

const mapDispatchToProps = dispatch => {
    return ({
        deleteCard: (id) => dispatch(deleteCard(id)),
        closeModal: () => dispatch(closeModal())

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);

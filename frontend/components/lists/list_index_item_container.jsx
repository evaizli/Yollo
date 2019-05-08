import { connect } from "react-redux";
import ListIndexItem from "./list_index_item";
import { deleteList, updateList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    let cards = ownProps.cardIds ? ownProps.cardIds.map(cardId => state.entities.cards[cardId]) : [];
    return ({
        cards: cards
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        deleteList: (id) => dispatch(deleteList(id)),
        updateList: (list) => dispatch(updateList(list)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndexItem);
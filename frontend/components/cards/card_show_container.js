import { connect } from "react-redux";
import CardShow from "./card_show";
import { deleteCard } from "../../actions/card_actions";



const mapStateToProps = (state, ownProps) => {
    return ({
        card: state.entities.cards[ownProps.id]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        deleteCard: (id) => dispatch(deleteCard(id))
    });
};

export default connect(mapStateToProps, null)(CardShow);

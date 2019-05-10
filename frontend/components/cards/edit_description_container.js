import { connect } from "react-redux";
import EditDescriptionForm from "./edit_description_form";
import { updateCard } from "../../actions/card_actions";


const mapStateToProps = (state, ownProps) => {
    return ({
        card: ownProps.card
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        updateCard: (card) => dispatch(updateCard(card))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDescriptionForm);

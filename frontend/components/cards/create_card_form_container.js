import { connect } from "react-redux";
import CreateCardForm from "./create_card_form";
import { createCard } from "../../actions/card_actions";

const mapStateToProps = (state, ownProps) => {

    return ({
        title:"",
        formType: "Create Card",
        listId: ownProps.listId
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createCard: (card) => dispatch(createCard(card))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardForm);
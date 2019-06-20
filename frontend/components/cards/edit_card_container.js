import {connect} from "react-redux";
import EditCardForm from "./edit_card_form";
import {updateCard} from "../../actions/card_actions";


const mapStateToProps = (state, Props) =>{
    return({
        formType: "Edit Card"
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (card) => dispatch(updateCard(card))
    });
};


export default connect (mapStateToProps, mapDispatchToProps)(EditCardForm);
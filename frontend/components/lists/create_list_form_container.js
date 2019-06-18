import { connect } from "react-redux";
import CreateListForm from "./create_list_form";
import { createList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        title: "",
        formType: "Create List"
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (list) => dispatch(createList(list))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm);

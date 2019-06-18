import React from "react";
import { connect } from 'react-redux';
import CreateListForm from "./create_list_form";
import { updateList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        formType: "Edit List"
    });
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: id => dispatch(updateList(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm);

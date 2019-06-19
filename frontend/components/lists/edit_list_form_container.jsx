import React from "react";
import { connect } from 'react-redux';
import CreateListForm from "./create_list_form";
import { updateList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {

    return({
        title: ownProps.list.title,
        id: ownProps.list.id,
        formType: "Edit List"
    });
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: list => dispatch(updateList(list)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm);

import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.session,
        formType: "login",
        navLink: <Link to="/signup"> or Create an account</Link>
    };
  
};

const mapDispatchToProps = dispatch => {
    return{
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


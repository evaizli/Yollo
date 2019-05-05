import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../actions/modal_actions";
import CreateBoardFormContainer from "./boards/create_board_form_container";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'create board':
            component = <CreateBoardFormContainer />;
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
        default:
            return null;
    }

}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
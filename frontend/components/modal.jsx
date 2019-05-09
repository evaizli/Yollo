import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../actions/modal_actions";
import CreateBoardFormContainer from "./boards/create_board_form_container";
import CardShowContainer from "../components/cards/card_show_container";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'create board':
            component = <CreateBoardFormContainer />;
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="create-board-modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
        case 'open card':
                component = <CardShowContainer id={modal.options.id}/>;
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="open-card-modal-child" onClick={e => e.stopPropagation()}>
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
import * as ApiUtil from "../util/card_api_util";
import { debug } from "util";

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRRORS";
export const CLEAR_CARD_ERRORS = "CLEAR_CARD_ERRRORS";
export const REMOVE_CARD = "REMOVE_CARD";


export const receiveCard = (card) => ({
    type: RECEIVE_CARD,
    card: card
});
export const receiveCardErrors = errors => ({
    type: RECEIVE_CARD_ERRORS,
    errors: errors
});

export const clearCardErrors = () => {
    return {
        type: CLEAR_CARD_ERRORS
    };
};
export const removeCard = (card) => {
    // debugger;
    return ({
        type: REMOVE_CARD,
        card: card
    });
};

export const createCard = (card) => dispatch => {
    return (
        ApiUtil.createCard(card).then(payload => dispatch(receiveCard(payload)),
            err => dispatch(receiveCardErrors(err.responseJSON)))
    );
};

export const updateCard = (card) => dispatch => {
    return (
        ApiUtil.updateCard(card).then(payload => dispatch(receiveCard(payload)),
            err => dispatch(receiveCardErrors(err.responseJSON)))
    );
};

export const deleteCard = (id) => dispatch => {
    return (
        ApiUtil.deleteCard(id).then(card => dispatch(removeCard(card)),
            err => dispatch(receiveCardErrors(err.responseJSON)))
    );
};


export const clearErrors = () => dispatch => {
    return (dispatch(receiveCardErrors([])));
};


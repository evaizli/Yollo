import * as ApiUtil from "../util/card_api_util";

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRRORS";
export const CLEAR_CARD_ERRORS = "CLEAR_CARD_ERRRORS";


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

export const clearErrors = () => dispatch => {
    return (dispatch(receiveCardErrors([])));
};





//fetchCards
//fetchCard
//createCard
//updateCard
//deleteCard
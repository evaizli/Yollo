import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_CARD } from "../actions/card_actions";
import { merge } from "lodash";

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_BOARD:
            return action.cards;
        case RECEIVE_CARD:
            newState = merge({}, state, { [action.card.id]: action.card });
            return newState;
        default:
            return state;
    }
};

export default cardsReducer;
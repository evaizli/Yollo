import {
    RECEIVE_BOARDS,
    RECEIVE_BOARD
} from "../actions/board_actions";

import { merge } from "lodsh";

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            newState = merge({}, state, { [action.board.id]: action.board });
            return newState;
        default:
            return state;
    }
};

export default boardsReducer;
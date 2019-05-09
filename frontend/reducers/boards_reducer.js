import { RECEIVE_BOARDS, RECEIVE_BOARD } from "../actions/board_actions";
import { REMOVE_LIST } from "../actions/list_actions";

import { merge } from "lodash";

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            newState = merge({}, state, {[action.board.id]: action.board });
            return newState;
        case REMOVE_LIST:
            newState = merge({},state);
            const board = newState[action.list.boardId];
            const removeIndex = board.listIds.indexOf(action.list.id);
            board.listIds.splice(removeIndex, 1);
            return newState;
        default:
            return state;
    }
};

export default boardsReducer;
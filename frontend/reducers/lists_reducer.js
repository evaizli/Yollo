import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";
import { merge } from "lodash";

const listsReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_BOARD:
            return action.lists;
        case RECEIVE_LIST:
            newState = merge({}, state, {[action.list.id]: action.list});
            return newState;
        case REMOVE_LIST:
            newState = merge({}, state);
            return newState;
        default: 
            return state;
    }
};

export default listsReducer;
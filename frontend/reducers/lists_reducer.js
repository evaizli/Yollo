import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";
import { merge } from "lodash";
import { REMOVE_CARD, RECEIVE_CARD } from "../actions/card_actions";


const listsReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_BOARD:
            return action.lists || [];
        case RECEIVE_LIST:
            newState = merge({}, state, {[action.list.id]: action.list});
            return newState;
        case REMOVE_LIST:
            newState = merge({}, state);
            delete newState[action.listId];
            return newState;
        case REMOVE_CARD:
            newState= merge({},state);
            const list = newState[action.card.listId];
            const removeIndex = list.cardIds.indexOf(action.card.id);
            list.cardIds.splice(removeIndex, 1);
            return newState;
        case RECEIVE_CARD:
            newState = merge({}, state);
            newState[action.card.listId].cardIds.push(action.card.id);
            return newState; 
        default: 
            return state;
    }
};

export default listsReducer;
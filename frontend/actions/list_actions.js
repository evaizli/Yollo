import * as ApiUtil from "../util/list_api__util";

export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list: list
});

export const receiveListErrors = errors => ({
    type: RECEIVE_LIST_ERRORS,
    errors: errors
});

export const clearListErrors = () => {
    return {
        type: CLEAR_LIST_ERRORS
    };
};

export const removeList = (list) => {
    return ({
        type: REMOVE_LIST,
        listId: list.id
    });
};

export const createList = (list) => dispatch => {
    return (
        ApiUtil.createList(list).then(payload => dispatch(receiveList(payload)),
            err => dispatch(receiveListErrors(err.responseJSON)))
    );
};

export const updateList = (list) => dispatch => {
    return (
        ApiUtil.updateList(list).then(payload => dispatch(receiveList(payload)),
            err => dispatch(receiveListErrors(err.responseJSON)))
    );
};
export const deleteList = (id) => dispatch => {
    return (
        ApiUtil.deleteList(id).then(list => dispatch(removeList(list)),
            err => dispatch(receiveListErrors(err.responseJSON)))
    );
};


export const clearErrors = () => dispatch => {
    return (dispatch(receiveListErrors([])));
};

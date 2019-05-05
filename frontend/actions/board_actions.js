import * as ApiUtil from "../util/board_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";


export const receiveBoards = (boards) =>({
    type: RECEIVE_BOARDS,
    boards: boards
});


export const receiveBoard = (board) => ({
    type: RECEIVE_BOARD,
    board: board
});

export const receiveBoardErrors = errors =>({
    type: RECEIVE_BOARD_ERRORS,
    errors: errors
});

export const clearBoardErrors = () => {
    return {
        type: CLEAR_BOARD_ERRORS
    };
};

export const fetchBoards = () => dispatch => {
    return(
        ApiUtil.fetchBoards().then(boards =>dispatch(receiveBoards(boards))
        ), err => (
            dispatch(receiveBoardErrors(err.responseJSON))
        )
    );
};


export const fetchBoard = (id) => dispatch => {
    return (
        ApiUtil.fetchBoard(id).then(board => dispatch(receiveBoard(board))
        ), err => (
            dispatch(receiveBoardErrors(err.responseJSON))
        )
    );
};

export const createBoard = (board) => dispatch => {
    return(
        ApiUtil.createBoard(board).then(board => dispatch(receiveBoard(board))
        ), err => (dispatch(receiveBoardErrors(err.responseJSON)))
    );
};

export const updateBoard = (board) => dispatch => {
    return (
        ApiUtil.updateBoard(board).then(board => dispatch(receiveBoard(board))
        ), err => (dispatch(receiveBoardErrors(err.responseJSON)))
    );
};

export const clearErrors = () => dispatch => {
    dispatch(receiveBoardErrors([]));
};



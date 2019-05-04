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

export const recieveBoardErrors = errors =>({
    type: RECEIVE_BOARD_ERRORS,
    errors: errors
});

export const fetchBoards = () => {
    return $.ajax ({
        method: "GET",
        url: `/api/boards`
    });
}; 


// get a single board, to be implemented with cards and list mvp 
export const fetchBoard = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/boards/${id}`
    });
}; 

export const createBoard = (board) => {
    return $.ajax({
        method: "POST",
        url: `/api/boards`,
        data: {board}
    });
}; 


export const updateBoard = (board) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: { board }
    });
}; 
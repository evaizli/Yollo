export const fetchLists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/lists`
    });
};
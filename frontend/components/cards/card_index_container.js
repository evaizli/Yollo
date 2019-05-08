import { connect } from "react-redux";
import ListIndex from "./list_index";
import { deleteList, updateList, createList } from "../../actions/list_actions";


const mapDispatchToProps = dispatch => {
    return ({
        deleteList: (id) => dispatch(deleteList(id)),
        updateList: (list) => dispatch(updateList(list)),
        createList: (list) => dispatch(createList(list))
    });
};

export default connect(null, mapDispatchToProps)(ListIndex);

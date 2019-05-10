// import React from "react";
// import { connect } from 'react-redux';
// import ListIndexItem from "./list_index_item";
// import { updateList } from "../../actions/list_actions";

// const mapStateToProps = (state, ownProps) => {
//     const defaultPost = { title: '', board: '' };
//     const post = state.posts[ownProps.match.params.postId] || defaultPost;
//     const formType = 'Update Post';

//     return { post, formType };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         updateList: id => dispatch(updateList(id)),
//     };
// };


// class EditListForm extends React.Component{
//     constructor(props){
//         super(props);
//     }
    
//     render(){
//         return(
//             <h2>UPDATE LIST</h2>
//         );
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);

import React from "react";
import EditDescriptionContainer from "./edit_description_container";
import EditCardContainer from "./edit_card_container";


class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            descriptionEditMode: false,
            titleEditMode: false
        };
        this.toggleDescriptionEditMode = this.toggleDescriptionEditMode.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.setTitleRef = this.setTitleRef.bind(this);
        this.toggleTitleEditMode = this.toggleTitleEditMode.bind(this);
    }

    toggleDescriptionEditMode(){
        this.setState({ descriptionEditMode: !this.state.descriptionEditMode});
    }

    toggleDescriptions(){ 
        return (this.state.descriptionEditMode) ? <EditDescriptionContainer 
            toggleEditMode={this.toggleDescriptionEditMode} 
            card={this.props.card}
            /> : this.props.card.description;
    }
        
    toggleTitleEditMode(){
        this.setState({titleEditMode: !this.state.titleEditMode});
    }
        
    toggleTitle(){
        return (this.state.titleEditMode) ? <EditCardContainer 
        toggleEditMode = {this.toggleTitleEditMode}
        card = {this.props.card}/> : this.props.card.title;
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickEvent);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickEvent);
    }
    handleClickEvent(event) {
        if (this.wrapperRef.className === "card-show-task-description-container" && !this.wrapperRef.contains(event.target)) {
            this.setState({ descriptionEditMode: false});
        }
        if (this.titleRef.className === "card-show-card-title" && !this.titleRef.contains(event.target)) {
            this.setState({titleEditMode: false});
        } 
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    setTitleRef(node){
        this.titleRef = node;
    }
 

    render(){
        const {id, title} = this.props.card;
        return (
            <div className="card-show-container">
                <div 
                    className="card-show-card-title"
                    onClick={()=> this.setState({titleEditMode: true})}
                    ref={this.setTitleRef}>
                    {this.toggleTitle()}
                </div>
                <div className="card-show-list-title">in list {this.props.listTitle}</div>

                <div>
                    <h2 className="card-show-description-title">Description</h2>
                    <div 
                        className="card-show-task-description-container" 
                        onClick={()=> this.setState({descriptionEditMode: true})} 
                        ref={this.setWrapperRef}
                    >
                        {this.toggleDescriptions()}
                    </div>
                </div>


                <button 
                    className="card-show-remove-card-button"
                    onClick={()=>{this.props.deleteCard(id); this.props.closeModal();}}>  
                    Delete Card          
                </button>

            </div>
        );
    }
}

export default CardShow;
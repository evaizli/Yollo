import React from "react";

class CreateCardForm extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="create-card-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className = "create-card-text-input"
                        type="text" 
                        value ={this.state.title}
                        onChange={this.update("title")}
                        placeholder = "+ Add another card"
                    />
                    <input className="create-card-button" type="submit" value ={this.props.formType}/>
                </form>

            </div>
        )
    }
}


export default CreateCardForm;
import React from "react";
import{
    IconButton,
}from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class DeleteTodo extends React.Component{
    constructor(props){
        super(props);
        this.delete=props.deleteForCompleted;
    }
    
    deleteEventHandler=()=>{
        console.log("delete completd Todo");
        this.delete();
    }

    render (){
        return(
            <div>Delete Completed Item
                <IconButton aria-label="Delete"
                    onClick={this.deleteEventHandler}>
                       <DeleteOutlined />
                    </IconButton>
            </div>
        );
    }
}
export default DeleteTodo;
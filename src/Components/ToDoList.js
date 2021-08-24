import React from "react";
import "./ToDoList.css";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
    return (
        <div className = "center4">
            {props.array.map(item => <ToDoListItem key = {item.id} title = {item.title} time = {item.time}></ToDoListItem>)}
        </div>
    );
}

export default ToDoList;
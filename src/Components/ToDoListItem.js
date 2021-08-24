import React from "react";
import "./ToDoListItem.css";

const ToDoListItem = (props) => {
    return (
        <div className = "listItem">
            <h4 id = "r">{props.time}</h4>
            <h4 id = "s">{props.title}</h4>
        </div>
    );
}

export default ToDoListItem;
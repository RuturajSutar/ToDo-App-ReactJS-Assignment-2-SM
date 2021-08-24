import React from "react";
import "./DeleteTODO.css";

const DeleteTODO = (props) => {
    const DeleteData = () => {
        props.removeData();
    }
    return (
        <div className = "center2">
            <div className = "one">
                <button id = "p" onClick = {DeleteData}>Delete TODO</button>
            </div>
        </div>
    );
}

export default DeleteTODO;
import React, { useState } from "react";
import "./AddTODO.css";

const AddTODO = (props) => {


    const [mytime , setTime] = useState("");
    const [mytitle , setTitle] = useState("");

    const sendData = (event) => {
        event.preventDefault();
        const myTODO = {
            time : mytime,
            title : mytitle
        }

        console.log("In AddTODO.js");
        console.log(myTODO);

        props.addData(myTODO);

        window.alert("ToDo is added Successfully");

        setTime("");
        setTitle("");
    }

    return (

        <div className = "center">
            <div className = "inner1">
                <form onSubmit = {sendData}>
                    <div className = "x">
                        <label>Time : </label>
                        <input value = {mytime} type = "time" onChange = {(e) => {setTime(e.target.value)}}></input>
                    </div>
                    <div className = "y">
                        <label>ToDo Title : </label>
                        <input value = {mytitle} id = "text" type = "text" onChange = {(e) => {setTitle(e.target.value)}}></input>
                    </div>
                    <div className = "z">
                        <button type = "submit">Add ToDo</button>
                    </div>
                </form>
            </div>
        </div>
       
    );
}

export default AddTODO;
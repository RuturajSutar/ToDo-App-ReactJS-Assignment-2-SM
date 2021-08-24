import { useState , useEffect } from "react";
import AddTODO from "./Components/AddTODO";
import DeleteTODO from "./Components/DeleteTODO";
import ToDoList from "./Components/ToDoList";

function App() {
  const [myArray , setArray] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("myArray");
    if(data) {
      setArray(JSON.parse(data));
    }
  } , []);

  useEffect(() => {
    localStorage.setItem("myArray" , JSON.stringify(myArray));
  } , [myArray]);

  const recieveData = (myData) => {
    const newData = {...myData , id : Math.random().toString()};
    console.log("In App.js");
    console.log(newData);
    setArray((prevState) => {
      return [newData , ...prevState];
    })
  }

  const myRemoveData = () => {
    localStorage.removeItem("myArray");
    setArray([]);
    window.alert("Data is Deleted Successfully")
  }
  return (
    <div>
      <AddTODO addData = {recieveData}></AddTODO>
      <DeleteTODO removeData = {myRemoveData}></DeleteTODO>
      <ToDoList array = {myArray}></ToDoList>
    </div>
  );
}

export default App;

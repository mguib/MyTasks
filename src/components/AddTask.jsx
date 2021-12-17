import React, {useState}  from 'react';
//import React, { useState } from 'react';

import './AddTask.css';
import Button from './Button';

const AddTasks = ({handleTaskAddition}) =>{
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) =>{
    //console.log(e.target.value);
    setInputData(e.target.value);
  }

  const hadleAddTaskClick = () =>{
    handleTaskAddition(inputData)
    setInputData("");
  }

  return(
    <div className="add-task-container">
      <input 
        onChange={handleInputChange} 
        value={inputData}
        className="add-task-input" 
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onClick={hadleAddTaskClick}>Adicionar</Button>
      </div>
      
    </div>
    
  )
}

export default AddTasks;
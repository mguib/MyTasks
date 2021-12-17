import React from 'react';
import {useParams, useHistory} from "react-router-dom";

import Buton from './Button';

import './TaskDetails.css';

const TaskDetails = () =>{
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () =>{
    history.goBack();
  }

  console.log(params);

  return(
    <>
      <div 
        className="back-button-container"
        onClick={handleBackButtonClick}  
      >
          <Buton>Voltar</Buton>
      </div>

      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur corporis qui impedit tempora ratione aut.
        </p>
      </div>
    </>
  );
}

export default TaskDetails;
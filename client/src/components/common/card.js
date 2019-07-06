import React from 'react';

const Card = (props) => {
  return(
    <div className='card-container' key={props.id}>
      <div className='card-title'>
        <h1>{props.title}</h1>
      </div>
      <div className='card-body'>
        <p>{props.body}</p>
      </div>
      <div className='card-footer'>
        <p>{props.footer}</p>
      </div>
      <div className='card-close'>
        <p>X</p>
      </div>
    </div>
  )
};

export default Card;

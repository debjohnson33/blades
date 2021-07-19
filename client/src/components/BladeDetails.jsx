import React from 'react';
import '../../../public/styles.css';

const GoatDetails = ({goat}) => {
  return (
    <div className='goatDetails'>
      <h2>Name: {goat.name}</h2>
      <p><b>Description:</b>  {goat.description}</p>
    </div>
  )
}

export default GoatDetails;
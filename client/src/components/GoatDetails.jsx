import React from 'react';

const GoatDetails = ({goat}) => {
  return (
    <div>
      <h2>{goat.name}</h2>
      <p>{goat.description}</p>
    </div>
  )
}

export default GoatDetails;
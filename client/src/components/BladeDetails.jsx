import React from 'react';
import '../../../public/styles.css';

const BladeDetails = ({blade}) => {
  return (
    <div className='bladeDetails'>
      <h2>Stens: {blade.stens}</h2>
      <p><b>Manufacturer:</b>  {blade.manufacturer}</p>
      <p><b>Quantity:</b> {blade.quantity}</p>
    </div>
  )
}

export default BladeDetails;
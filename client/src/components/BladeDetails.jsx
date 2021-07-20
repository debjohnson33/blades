import React from 'react';
import '../../../public/styles.css';

const BladeDetails = ({blade, selectEditMode}) => {
  const handleEditMode = () => {
    selectEditMode(blade.id);
  }
  return (
    <div className='bladeDetails'>
      <h2>Stens: {blade.stens}</h2>
      <p><b>Manufacturer:</b>  {blade.manufacturer}</p>
      <p><b>Quantity:</b> {blade.quantity}</p>
      <button onClick={() => handleEditMode()}>Edit this Blade</button>
    </div>
  )
}

export default BladeDetails;
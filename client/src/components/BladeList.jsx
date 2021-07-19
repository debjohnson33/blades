import React from 'react';

const BladeList = ({blades, selectBlade}) => {
  return <ul>{blades.map(blade => <li><a href='#' onClick={() => selectBlade(blade)} >{blade.stens}</a></li>)}</ul>
}

export default BladeList;
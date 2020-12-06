import React from 'react';

const GoatList = ({goats}) => {
  return <ul>{goats.map(goat => <li><a href='#' >{goat.name}</a></li>)}</ul>
}

export default GoatList;
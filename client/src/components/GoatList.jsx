import React from 'react';

const GoatList = ({goats, selectGoat}) => {
  return <ul>{goats.map(goat => <li><a href='#' onClick={() => selectGoat(goat)} >{goat.name}</a></li>)}</ul>
}

export default GoatList;
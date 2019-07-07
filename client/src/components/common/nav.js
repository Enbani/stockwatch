import React from 'react';

const Nav = (props) => {
  return(
    <div className='nav-container'>
      <h2 className={props.titleStyle}>{props.title}</h2>
    </div>
  )
}

export default Nav;

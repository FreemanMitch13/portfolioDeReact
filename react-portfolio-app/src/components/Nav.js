import React from 'react';


function Nav(props) {
  
  return (
    <h2 className={props.class} onClick={() => props.setPage(props.class)}>{props.text}</h2>
   );
}

export default Nav;
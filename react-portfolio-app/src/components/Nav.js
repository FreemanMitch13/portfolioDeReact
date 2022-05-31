import React from 'react';

const styles = {
  headerStyle: {
    backgroundColor: 'blue',
  },
  headingStyle: {
    fontSize: '25px',
    color: 'white',
  },
  nav: {
    display: 'flex'
  }
};

function Nav(props) {
  
  return (
    <h2 style={styles.headingStyle} className={props.class} onClick={() => props.setPage(props.class)}>{props.text}</h2>
   );
}

export default Nav;
import React from 'react';
import Nav from './Nav';

const styles = {
    headerStyle: {
      background: 'red',
    },
    headingStyle: {
      fontSize: '100px',
    },
    nav: {
      display: 'flex'
    }
};
let navButtons=[{text:"About Me", class:"aboutMe"}, {text:"Portfolio", class:"portfolio"}, {text:"Contact", class:"contact"}, {text:"Resume", class:"resume"}];


function Header(props) {
  
  return (<div style={styles.headerStyle}>
      <nav>
      <h1 style={styles.headingStyle}>Mitchell</h1>
      <div className='routes'>
      {navButtons.map((btn, index) => {
        
        return <Nav key={btn.class} text={btn.text} class={btn.class} setPage={props.setPage}/>
      })}
      </div>
      </nav>
      </div>);
}

export default Header;
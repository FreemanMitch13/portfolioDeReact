import React from 'react';

const styles = {
    footerStyle: {
      background: '#091540',
      padding: '10px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      height: '30px',
      width: '100%'
    },
    navLinkStyle: {
      color: 'white',
      justifyContent: 'space-between',
      margin: '10px'
    }
};

function Footer(props) {
  
  return (<div style={styles.footerStyle}>
      <a style={styles.navLinkStyle} href = "https://github.com/FreemanMitch13" target= "_blank" rel="noreferrer" >github</a>
      <a style={styles.navLinkStyle} href = "https://www.linkedin.com/in/mitchell-freeman-mba-725207a4/" target= "_blank" rel="noreferrer">linkedIn</a>
  </div>);
}

export default Footer;
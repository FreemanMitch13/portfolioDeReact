import React from 'react';

const styles = {
    footerStyle: {
      background: 'green',
    },
};

function Footer(props) {
  
  return (<div style={styles.footerStyle}>
      <a href = "https://github.com/FreemanMitch13" target= "_blank" rel="noreferrer" >github</a>
      <a href = "https://www.linkedin.com/in/mitchell-freeman-mba-725207a4/" target= "_blank" rel="noreferrer">linkedIn</a>
  </div>);
}

export default Footer;
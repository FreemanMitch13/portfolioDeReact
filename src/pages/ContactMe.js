import React from 'react';

const styles = {
  containerStyle: {
    backgroundColor: '#ABD2FA',
    position: 'fixed',
    left: '0',
    top: '50',
    height: '100%',
    width: '100%'
  }
};

function ContactMe(props) {
  
  return (
    <div style={styles.containerStyle}>
      <div>
        <h2>Contact Me</h2>
      </div>
    </div>
   )
};

export default ContactMe;
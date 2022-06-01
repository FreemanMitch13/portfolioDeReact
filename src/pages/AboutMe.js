import React from 'react';

const styles = {
  containerStyle: {
    backgroundColor: '#ABD2FA',
    width: '55%',
    position: 'fixed',
    right: '0',
    height: '100%'

  },
  imageStyle: {
    position: 'fixed',
    left: '0',
    width: '45%',
    height: '75%'
  },
  paraStyle: {
    justifyContent: 'center',
    lineHeight: '25px',
    fontSize: '20px',
    margin: '10px',
  },
  headingStyle: {
    fontSize: '80px',
    color: 'white',
  },
  nav: {
    display: 'flex'
  }
};

function AboutMe(props) {
  
  return (
    <div style={styles.containerStyle}>
        <img src= './images/headShot.jpg' alt='' style={styles.imageStyle}></img>
        <h2>About Me</h2>
          <p style={styles.paraStyle}>
            My name is Mitchell Freeman. I was born and raised in Alabama, where I earned both of my degrees. <br></br>I have a Bachelor's Degree in Finance from Jacksonville State University and M.B.A from the University of Alabama at Birmingham.
            <br></br>My professional background is in Finance with a focus on pricing and procurement. Currently, I am working as the Practice Manager for a mid size law firm in Atlanta, Georgia.<br></br>
            I am currently enrolled in Georgia Tech's Full Stack Developer Bootcamp where I am learning the tools to become a developer. <br></br>I am interested to see how what I am learning can be implemented into my current role, but also excited for the new career paths that this knowledge can hold. 
          </p>
    </div>
   )
};

export default AboutMe;
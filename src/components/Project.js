import React from 'react';

const styles = {
  containerStyle: {
    backgroundColor: '#7692FF',
    width: '100%',
    height: '100%',
  },
  imgStyle: {
    width: '30%'
  },
  cardStyle: {
    display: 'flex-wrap',
    backgroundColor: '#3D518C',
    width: '40%',
    height: '30%',
    padding: '10px'

  }
};

const apps = [
  {
    name: "SauceMakerPro", 
    img: './images/SauceMakerPro.png',
    url: "https://sauce-maker-pro.herokuapp.com/",
    gitHub: "https://github.com/BinaryBitBytes/Sauce-Maker-Pro"
  },
  {
    name: "Git There", 
    img: './images/gitThere.png',
    url: "https://freemanmitch13.github.io/git-there/",
    gitHub: "https://github.com/FreemanMitch13/git-there"
  },
  {
    name: "Coding Quiz", 
    img: './images/codingQuiz.png',
    url: "https://freemanmitch13.github.io/coding-quiz/",
    gitHub: "https://github.com/FreemanMitch13/coding-quiz"
  },
  {
    name: "Weather Dashboard", 
    img: './images/weatherDash.png',
    url: "https://freemanmitch13.github.io/weather-dashboard/",
    gitHub: "https://github.com/FreemanMitch13/weather-dashboard"
  }
]
function Project(props) {
  return (
    <div className="project" style={styles.containerStyle}>
      {apps.map(app => {
        return(
        <div className="card" key={app.name} style = {styles.cardStyle}>
          <img src={app.img} alt ="" style={styles.imgStyle}></img>
          <h2>{app.name}</h2>
          <a href={app.url}>{app.url}</a>
          <a href={app.gitHub}>{app.gitHub}</a>
        </div>)
        })}
    </div>
   );
}

export default Project;

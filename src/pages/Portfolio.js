import React from 'react';

const styles = {
  containerStyle: {
    backgroundColor: '#7692FF',
    width: '100%',
    height: '100%'
  }
};

const apps = [
    {
      name: "SauceMakerPro", 
      img: './images.SauceMakerPro.png',
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
  function MyPortfolio(props) {
    return (
      <div className="project" style={styles.containerStyle}>
        {apps.map(app=>{
          return (
          <div className="card">
            <img src={apps.img} alt =""></img>
            <h2>{apps.name}</h2>
            <a href={apps.url}>{apps.name}</a>
            <a href={apps.gitHub}>GitHubRepo</a>
          </div>)
          })}
      </div>
     );
  }


export default MyPortfolio;
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyResume from './pages/Resume';
// import MyPortfolio from './pages/Portfolio';


function App() {
  
  const [activePage, setActivePage] = useState("aboutMe");
  console.log('page: ',activePage)

  return (
    <div className="App">
      <Header setPage={setActivePage} />

      {activePage==="aboutMe"&&
      <AboutMe/>
      }
      {activePage==="portfolio"&&
      <Project/>
      }
      {activePage==="contact"&&
      <ContactMe/>}
      {activePage==="resume"&&
      <MyResume/>}

      <Footer/>

    </div>
  );
}

export default App;

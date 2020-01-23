import React from 'react';
import logo from './logo.svg';
import ContactBar from './components/ContactBar';
import DownArrow from './components/DownArrow';
import PContainer from './components/ProjectContainer';
import homeIcon from './images/home100.png';
import blogIcon from './images/blog100.png';
import cityIcon from './images/city100.png';
import groupIcon from './images/userGroups100.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactBar />
      <div id='logo'>
        <h1>Nick Arnold</h1>
        <p>I'm a full stack web developer located in Minneapolis</p>
      </div>
      <div id='arrow1'>
        <DownArrow 
          targetName = 'projectDiv'
          arrowText = 'My Work'
        />
      </div>
      <div id='projectDiv'>
        <h1>Projects</h1>
        <PContainer 
          pTitle = 'Winona.realestate'
          pImg = {homeIcon}
          pTech = {['HTMl/CSS','JavaScript', 'jQuery']}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          demoLink = 'http://winona.realestate'
          gitLink = 'https://github.com/NickArnld/winonaRealEstate'
        />
        <PContainer 
          pTitle = 'Blogifier'
          pImg = {blogIcon}
          pTech = {['HTMl/CSS','JavaScript', 'jQuery', 'Node.js/Express', 'MySQL']}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          demoLink = 'https://blogifier.herokuapp.com/'
          gitLink = 'https://github.com/bsessio/blogifier'
        />
        <PContainer 
          pTitle = 'Rendezvous'
          pImg = {groupIcon}
          pTech = {['HTMl/CSS','JavaScript', 'Node.js/Express', 'React', 'MongoDB']}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          demoLink = 'https://project-rendezvous-app.herokuapp.com/'
          gitLink = 'https://github.com/aileenflanagan/rendezvous-app'
        />
        <PContainer 
          pTitle = 'City Explorer'
          pImg = {cityIcon}
          pTech = {['HTMl/CSS','JavaScript', 'jQuery']}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          demoLink = 'https://cityexplorerapp.herokuapp.com/index.html'
          gitLink = 'https://github.com/NickArnld/cityExplorer'
        />
        <div id='footer'>
        <p>© 2020 Nick Arnold. All Rights Reserved.</p>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

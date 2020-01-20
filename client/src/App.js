import React from 'react';
import logo from './logo.svg';
import ContactBar from './components/ContactBar';
import DownArrow from './components/DownArrow';
import PContainer from './components/ProjectContainer';
import testImg from './images/github100.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactBar />
      <div id='logo'>
        <h1>Nick Arnold</h1>
      </div>
      <div id='arrow1'>
        <DownArrow 
          targetName = 'aboutDiv'
          arrowText = 'Learn More'
        />
      </div>
      <div id='aboutDiv'>
        <h1>About Me</h1>
        <hr></hr>

      </div>
      <div id='arrow2'>
        <DownArrow 
          targetName = 'projectDiv'
          arrowText = 'My Work'
        />
      </div>
      <div id='projectDiv'>
        <h1>Projects</h1>
        <hr></hr>
        <PContainer 
          pTitle = 'Project 1'
          pImg = {testImg}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        />
        <PContainer 
          pTitle = 'Project 2'
          pImg = {testImg}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        />
        <PContainer 
          pTitle = 'Project 3'
          pImg = {testImg}
          pDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        />
      </div>
      

    </div>
  );
}

export default App;

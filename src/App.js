import React from 'react';
// import logo from './logo.svg';
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
        <p></p>
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
          pDescription = 'This site was made as a landing page for my mother who is a real estate agent. The design is simple and is meant to introduce my mom to potential clients and redirect them to her current listings. Working on this project taught me about SEO principles and other scroll effects using JavaScript.'
          demoLink = 'http://winona.realestate'
          gitLink = 'https://github.com/NickArnld/winonaRealEstate'
        />
        <PContainer 
          pTitle = 'Blogifier'
          pImg = {blogIcon}
          pTech = {['HTMl/CSS','JavaScript', 'jQuery', 'Node.js/Express', 'MySQL']}
          pDescription = 'This application was built as a part of a team project at my web development bootcamp. As the name implies it is a blog site, where users can sign in and make posts including text and images. Posts can then be searched by either author or location. My role in this project was working on the backend and database. I learned how to connect a MySQL database with the Node.js backend, and connecting that backend with the front end. It taught me a lot about web application architecture.'
          demoLink = 'https://blogifier.herokuapp.com/'
          gitLink = 'https://github.com/bsessio/blogifier'
        />
        <PContainer 
          pTitle = 'Rendezvous'
          pImg = {groupIcon}
          pTech = {['HTMl/CSS','JavaScript', 'Node.js/Express', 'React', 'MongoDB']}
          pDescription = 'This application was also built as a part of a team project at my web development bootcamp. The purpose of Rendezvous is to allow social groups (such as book clubs, work out clubs, or game nights) to set up a page for their group. On their page they can set meeting times and discuss issues related to their group. On this project my task was working primarily on the backend and the database. I also helped with the front-end when it came to connecting our backend to specific React components. This project taught me a lot about React and how to set up a custom API to send data to the correct components.'
          demoLink = 'https://project-rendezvous-app.herokuapp.com/'
          gitLink = 'https://github.com/aileenflanagan/rendezvous-app'
        />
        <PContainer 
          pTitle = 'City Explorer'
          pImg = {cityIcon}
          pTech = {['HTMl/CSS','JavaScript', 'jQuery']}
          pDescription = 'This was the first team project I was apart of during my web development bootcamp. City Explorer is an application built to provide information on any city in the U.S. By searching the city you are interested in you can get a full report on food venues, events, and weather in the respective city. My task in this project was bringing together the API’s my teammates worked on. I wrote the JavaScript functions to bring in the data from multiple API calls. Working on this project has taught me how to organize code and JavaScript functions in a clean and efficient manner.'
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

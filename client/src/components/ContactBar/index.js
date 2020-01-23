import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import './style.css';
import linkLogo from '../../images/linkedin100.png';
import gitLogo from '../../images/github100.png';
import emailLogo from '../../images/email100.png';

class SmallNav extends Component {
    state = {
    }
    render() {
      return <>
      <div id='contactBar'>
        <div id='linkBox' className='cBox'> <a href='https://www.linkedin.com/in/nicholas-arnold-85082181/'><h4>Linkedin</h4><img src={linkLogo} /> </a> </div>
        <div id='gitBox' className='cBox'> <a href='https://github.com/NickArnld'><h4>Github</h4><img src={gitLogo} /> </a></div>
        <div id='emailBox' className='cBox'> <a href='mailto:nick.arnold.dev@gmail.com'><h4>Email</h4><img src={emailLogo} /> </a></div>
      </div>
      </>;
    }
}
export default SmallNav;
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
      return <div id='contactBar'>
        <div className='cBox' href='#'> <img src={linkLogo} /> </div>
        <div className='cBox' href='#'> <img src={gitLogo} /> </div>
        <div className='cBox' href='#'> <img src={emailLogo} /> </div>
      </div>;
    }
}
export default SmallNav;
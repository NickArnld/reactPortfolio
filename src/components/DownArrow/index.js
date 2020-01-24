import React, {Component} from 'react';
import './style.css';
import arrowImg from '../../images/downArrowWhite.png';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';

const Animation = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class DownArrow extends Component {
    
    scrollTo = () => {
      var elmnt = document.getElementById(this.props.targetName);
      elmnt.scrollIntoView();
    }

    render() {
      return <div className='arrowDiv' onClick={this.scrollTo} href="#">
          <Animation>
            <h4 className='arrowText'>{this.props.arrowText}</h4>
            <img className='arrow' src={arrowImg}></img>
          </Animation>
      </div>
    }
}
export default DownArrow;
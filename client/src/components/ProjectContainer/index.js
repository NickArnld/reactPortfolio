import React, {Component} from 'react';
import './style.css';
import demoImg from '../../images/website100.png';
import codeImg from '../../images/code100.png';

class ProjectContainer extends Component {
    state = {
      thisProjectOpen: false,
    }
    
    render() {
      //if statement to expand to full screen

      return <div className='pContain'>
        <img className='pImg' src={this.props.pImg}/>
        <h2 className='pTitle'>{this.props.pTitle}</h2>
        <div className='pTech'>
        <hr></hr>
          {/* <h3>Built With</h3> */}
          <ul>
            {this.props.pTech.map((tech) => <li>{tech}</li>)}
          </ul>
          <hr></hr>
        </div>
        <p className='pDescription'>{this.props.pDescription}</p>
          <hr></hr>
        <div className='pButton'><a href={this.props.demoLink}><img className='pBImg' src={demoImg}/><h4>Demo</h4></a></div>
        <div className='pButton'><a href={this.props.gitLink}><img className='pBImg' src={codeImg}/><h4>Code</h4></a></div>
      </div>
    }
}
export default ProjectContainer;
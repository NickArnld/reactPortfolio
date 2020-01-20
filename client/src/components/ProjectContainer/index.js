import React, {Component} from 'react';
import './style.css';

class ProjectContainer extends Component {
    state = {
      thisProjectOpen: false,
    }
    render() {
      //if statement to expand to full screen
      return <div className='pContain'>
        <h2 className='pTitle'>{this.props.pTitle}</h2>
        <img className='pImg' src={this.props.pImg}/>
        <p className='pDescription'>{this.props.pDescription}</p>
        <button>Demo</button>
        <button>Code</button>
      </div>
    }
}
export default ProjectContainer;
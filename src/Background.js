import React,{Component} from 'react';
import eagle from './images/logo.png';



class Background extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2 className='page-title'>
          Backgrounds
        </h2>
        <div className="arranger">
          <div className="back1">
            <h4 className="blue-text">
              Basic Blue
            </h4>
          </div>
          <div className="back2">
            <h4 className="labeller">
              Image
            </h4>
          </div>
          <div className="back3">
            <h4 className="labeller">
              Gradient
            </h4>
          </div>
          <div className="back4">
            <h4 className="labeller">
              Rad Gradient
            </h4>
          </div>
        </div>

        <div className="arranger">
          <div className="repeater1">
            <h4 className="labeller">
              Line it up!
            </h4>
          </div>
          <div className="repeater2">
          </div>
          <div className="repeater3">
            <h4 className="labeller">
              Small Default
            </h4>
          </div>
          <div className="repeater4">
            <h4 className="labeller">
              Round
            </h4>
          </div>
        </div>

        <div className="arranger">
          <div className="repeater5">
            <h4 className="labeller">
              Repeat X
            </h4>
          </div>
          <div className="repeater6">
            <h4 className="labeller">
              Repeat Y
            </h4>
          </div>
          <div className="repeater7">
            <h4 className="labeller">
              Space
            </h4>
          </div>
          <div className="repeater8">
            <h4 className="labeller">
              No Repeat Centre
            </h4>
          </div>
        </div>

        <div className="arranger">
          <div className="positioner1">
            <h4 className="labeller">
              Left
            </h4>
          </div>
          <div className="positioner2">
            <h4 className="labeller">
              Top Right
            </h4>
          </div>
          <div className="positioner3">
            <h4 className="labeller">
              70% 33%
            </h4>
          </div>
          <div className="positioner4">
            <h4 className="labeller">
              15px 250px
            </h4>
          </div>
        </div>

      </div>
    )
  }
}

export default Background

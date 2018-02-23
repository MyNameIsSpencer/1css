import React,{Component} from 'react';
import eagle from './images/logo.png';



class Background extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
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
          <div className="back5">
            <h4 className="labeller">
              Line it up!
            </h4>
          </div>
          <div className="back6">
          
          </div>
          <div className="back7">
            <h4 className="labeller">
            </h4>
          </div>
          <div className="back8">
            <h4 className="labeller">
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Background

import React, { Component } from 'react';

class Border extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className='page-title'>
          Borders
        </h2>
        <div className="arranger-third">
          <div className="border1">
            <h4 className="labeller">
              Hidden
            </h4>
          </div>
          <div className="border2">
            <h4 className="labeller">
              Solid
            </h4>
          </div>
          <div className="border3">
            <h4 className="labeller">
              Dotted
            </h4>
          </div>
        </div>

        <div className="arranger-third">
          <div className="border4">
            <h4 className="labeller">
              Groove
            </h4>
          </div>
          <div className="border5">
            <h4 className="labeller">
              Ridge
            </h4>
          </div>
          <div className="border6">
            <h4 className="labeller">
              Outset
            </h4>
          </div>
        </div>

        <div className="arranger-third">
          <div className="border7">
            <h4 className="labeller">
              Mixed
            </h4>
          </div>
          <div className="border8">
            <h4 className="labeller">
              Top Only
            </h4>
          </div>
          <div className="border10">
            <h4 className="labeller">
              Running Away
            </h4>
            <div className="border9">
            </div>
          </div>
        </div>

        <div className="arranger-third">
          <div className="border11">
            <h4 className="labeller">
              Radius
            </h4>
          </div>
          <div className="border12">
            <h4 className="labeller">
              Triple Radius
            </h4>
          </div>
          <div className="border13">
            <h4 className="labeller">
              Focused Radius
            </h4>
          </div>
        </div>

      </div>
    )
  }
}


export default Border;

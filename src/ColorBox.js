import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacity = this.props.opacity
    if (opacity > .2) {
      return (
        <div className="color-box" style={{opacity: 2}}>
            <ColorBox opacity={opacity -= .2} />
        </div>
      )
    } else {
      return null;
    }
  }

}

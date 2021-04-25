import React, { Component } from "react";
import { View } from "react-native";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArrows = (xInit) => {
    const arrowsList = [];

    for (var i = 0; i < this.props.barConfig.length; i++) {
      if (this.props.barConfig[i]) {
        if (i % 2 === 0)
          arrowsList.push(<DownArrow key={i} x={xInit + i * 50} />);
        else arrowsList.push(<UpArrow key={i} x={xInit + i * 50} />);
      }
    }

    console.log(arrowsList.length);
    return arrowsList;
  };

  render = () => {
    return <Svg>{this.renderArrows(50)}</Svg>;
  };
}

export default Bar;

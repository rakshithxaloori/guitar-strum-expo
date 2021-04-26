import React, { Component } from "react";
import { View } from "react-native";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";
import Fork from "../assets/fork";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArrows = () => {
    const arrowsList = [];

    for (var i = 0; i < this.props.barConfig.length; i++) {
      if (this.props.barConfig[i]) {
        if (i % 2 === 0)
          arrowsList.push(
            <DownArrow
              key={i}
              x={this.props.xInit + i * this.props.xSep}
              y1={this.props.arrowY1}
              arrowHeight={this.props.arrowHeight}
            />
          );
        else
          arrowsList.push(
            <UpArrow
              key={i}
              x={this.props.xInit + i * this.props.xSep}
              y1={this.props.arrowY1}
              arrowHeight={this.props.arrowHeight}
            />
          );
      }
    }

    return arrowsList;
  };

  renderForks = () => {
    const forksList = [];
    for (var i = 0; i < this.props.barConfig.length / 2; i++) {
      forksList.push(
        <Fork
          key={i}
          x={this.props.xInit + 2 * i * this.props.xSep}
          xSep={this.props.xSep}
          y1={this.props.arrowY1 + 75}
          forkHeight={this.props.forkHeight}
        />
      );
    }

    return forksList;
  };

  render = () => {
    return (
      <View>
        <Svg>
          {this.renderArrows()}
          {this.renderForks()}
        </Svg>
      </View>
    );
  };
}

export default Bar;

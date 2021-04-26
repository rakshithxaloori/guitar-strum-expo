import React, { Component } from "react";
import { View } from "react-native";
import { Svg } from "react-native-svg";

import Bar from "./bar";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beatIndex: 0,
    };
  }

  beatIntervalID = null;

  componentDidMount = () => {
    this.beatIntervalID = setInterval(() => {
      this.setState({
        beatIndex: this.state.beatIndex <= 22 ? this.state.beatIndex + 1 : 0,
      });
    }, 1000 * (60.0 / (2 * this.props.bpm)));
  };

  componentWillUnmount = () => {
    clearInterval(this.beatIntervalID);
  };

  renderBars = () => {
    const barsList = [];
    for (var i = 0; i < 3; i++) {
      barsList.push(
        <Bar
          key={i}
          barIndex={i}
          beatIndex={this.state.beatIndex}
          barConfig={this.props.barConfig}
          xInit={50}
          xSep={50}
          arrowY1={20 + i * 200}
          arrowLineHeight={50}
          forkHeight={60}
        />
      );
    }

    return barsList;
  };

  render = () => {
    return (
      <View>
        <Svg>{this.renderBars()}</Svg>
      </View>
    );
  };
}

export default Play;

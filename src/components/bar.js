import React, { Component } from "react";
import { Button, View } from "react-native";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";
import Fork from "../assets/fork";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beatIndex: 0,
    };
  }

  intervalID = null;

  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.setState({
        beatIndex: this.state.beatIndex < 7 ? this.state.beatIndex + 1 : 0,
      });
    }, 1000 * (60.0 / (2 * this.props.bpm)));
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  renderArrows = () => {
    const arrowsList = [];

    for (var i = 0; i < this.props.barConfig.length; i++) {
      if (this.props.barConfig[i]) {
        if (i % 2 === 0)
          arrowsList.push(
            <DownArrow
              key={i}
              highlight={i === this.state.beatIndex % 8}
              x={this.props.xInit + i * this.props.xSep}
              y1={this.props.arrowY1}
              arrowLineHeight={this.props.arrowLineHeight}
            />
          );
        else
          arrowsList.push(
            <UpArrow
              key={i}
              highlight={i === this.state.beatIndex % 8}
              x={this.props.xInit + i * this.props.xSep}
              y1={this.props.arrowY1}
              arrowLineHeight={this.props.arrowLineHeight}
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
        <Button
          style={{ flex: 1 }}
          title="Stop"
          onPress={() => clearInterval(this.intervalID)}
        />
      </View>
    );
  };
}

export default Bar;

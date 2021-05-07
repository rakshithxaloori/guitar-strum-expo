import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { Svg, Text as SvgText } from "react-native-svg";

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
    }, 1000 * (60.0 / (2 * this.props.navigation.getParam("bpm"))));
  };

  componentWillUnmount = () => {
    clearInterval(this.beatIntervalID);
  };

  renderBars = () => {
    const windowWidth = Dimensions.get("window").width;
    // const windowHeight = Dimensions.get("window").height;

    const barsList = [];
    for (var i = 0; i < 3; i++) {
      const yChordBar = 20 + i * 200;
      const xInit = 25;
      barsList.push(
        <Bar
          key={i}
          barIndex={i}
          beatIndex={this.state.beatIndex}
          // pattern={this.props.pattern}
          pattern={this.props.navigation.getParam("pattern")}
          xInit={25}
          xSep={(windowWidth - 2 * xInit) / 7}
          yChordBar={yChordBar}
          y={yChordBar + 70}
          yCountAnd={yChordBar + 160}
          arrowLineHeight={50}
          // forkHeight={60}
        />
      );
    }

    return barsList;
  };

  render = () => {
    return (
      <View>
        <Svg>
          {this.renderBars()}
          <SvgText
            fill="black"
            stroke="white"
            fontSize="40"
            fontWeight="bolder"
            x={Dimensions.get("window").width / 2 - 50}
            y={Dimensions.get("window").height - 100}
          >
            BPM: {this.props.navigation.getParam("bpm")}
          </SvgText>
        </Svg>
      </View>
    );
  };
}

export default Play;

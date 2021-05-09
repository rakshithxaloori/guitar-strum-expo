import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Bar from "./bar";

class Play extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { navigation } = this.props;

    const chordsBar = [[], [], []];
    // According to #chord changes, pattern
    // populate the chordsBar
    const pattern = navigation.getParam("pattern");
    console.log("PATTERN", pattern);
    const chordChanges = navigation.getParam("chordChanges");
    const chordChangesList = [
      [0, 1, 0, 1],
      [1, 1, 0, 0],
      [1, 0, 1, 0],
    ];

    // TODO chordChangesList
    // Don't chordChange at [2][3]
    // Choose a chord
    let chord = "a";
    for (let j = 0; j < chordsBar.length; j++) {
      for (let i = 0; i < pattern.length; i += 2) {
        chordsBar[j][i] = chord;
        chordsBar[j][i + 1] = chord;
        if (chordChangesList[j][i / 2] === 1) {
          // Choose new chord
          // newChord(chord, chords)
          chord += 1;
        }
      }
    }
    console.log(chordsBar);

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
          chords={[]}
          pattern={this.props.navigation.getParam("pattern")}
        />
      );
    }

    return barsList;
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>{this.renderBars()}</View>
      </View>
    );
  };
}

export default Play;

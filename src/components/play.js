import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Bar from "./bar";

class Play extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params);
    const { navigation } = this.props;

    const chordsBar = [[], [], []];
    const pattern = navigation.getParam("pattern");
    // const chordChanges = navigation.getParam("chordChanges");
    const chordChanges = 3;

    const chordChangesList = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let x = 0; x < 3; x++) {
      const newChordChangesList = [];
      while (newChordChangesList.length < chordChanges) {
        let r = Math.floor(Math.random() * 4);
        if (
          newChordChangesList.indexOf(r) === -1 &&
          (pattern[2 * r] === 1 || pattern[2 * r + 1] === 1)
        ) {
          newChordChangesList.push(r);
          chordChangesList[x][r] = 1;
        }
      }
    }

    console.log("chordChangesList", chordChangesList);

    // Choose a chord
    let chord = "a";
    for (let j = 0; j < chordsBar.length; j++) {
      for (let i = 0; i < pattern.length; i += 2) {
        if (pattern[i] === 1) chordsBar[j][i] = chord;
        else chordsBar[j][i] = null;
        if (pattern[i + 1] === 1) chordsBar[j][i + 1] = chord;
        else chordsBar[j][i + 1] = null;
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
      chordsBar: chordsBar,
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
          chords={this.state.chordsBar[i]}
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

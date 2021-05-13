import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import Bar from "./bar";

import { color } from "../constants";

function shuffle(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

class Play extends Component {
  constructor(props) {
    super(props);
    // TODO change let to const?
    let { bpm, chords, chordChanges, pattern } = this.props.route.params;

    const chordsBar = [[], [], []];
    chordChanges = 3;

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

    // Chords array should be exactly chordChanges+1
    let fullChords = [];
    while (fullChords.length < 3 * chordChanges + 1)
      fullChords = [...fullChords, ...shuffle(chords)];

    let chordIndex = 0;
    for (let j = 0; j < chordsBar.length; j++) {
      for (let i = 0; i < pattern.length; i += 2) {
        if (pattern[i] === 1 || pattern[i + 1] === 1)
          chordsBar[j][i] = fullChords[chordIndex];
        else chordsBar[j][i] = null;
        if (chordChangesList[j][i / 2] === 1) {
          chordIndex += 1;
        }
      }
    }

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
    }, 1000 * (60.0 / (2 * this.props.route.params.bpm)));
    // This number is for both up and down, which is why we do 2 * bpm
  };

  componentWillUnmount = () => {
    clearInterval(this.beatIntervalID);
  };

  renderBars = () => {
    const barsList = [];
    for (let i = 0; i < 3; i++) {
      barsList.push(
        <Bar
          key={i}
          barIndex={i}
          beatIndex={this.state.beatIndex}
          chords={this.state.chordsBar[i]}
          pattern={this.props.route.params.pattern}
        />
      );
    }

    return barsList;
  };

  render = () => {
    return (
      <View style={styles.screenStyling}>
        <View style={{ flex: 4 }}>{this.renderBars()}</View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  screenStyling: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: color.primary,
  },
});

export default Play;

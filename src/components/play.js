import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Bar from "./bar";

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

    // Choose a chord
    const chords = navigation.getParam("chords");
    console.log("Chords", chords);
    // Chords array should be exactly chordChanges+1
    console.log("Shuffled", shuffle(chords));
    let fullChords = [];
    while (fullChords.length < 3 * chordChanges + 1)
      fullChords = [...fullChords, ...shuffle(chords)];

    console.log(fullChords);

    let chordIndex = 0;
    for (let j = 0; j < chordsBar.length; j++) {
      for (let i = 0; i < pattern.length; i += 2) {
        if (pattern[i] === 1) chordsBar[j][i] = fullChords[chordIndex];
        else chordsBar[j][i] = null;
        if (pattern[i + 1] === 1) chordsBar[j][i + 1] = fullChords[chordIndex];
        else chordsBar[j][i + 1] = null;
        if (chordChangesList[j][i / 2] === 1) {
          chordIndex += 1;
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
    // This number is for both up and down, which is why we do 2 * bpm
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

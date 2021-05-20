import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";

import Bar from "./bar";

import { color, windowHeightRatio } from "../constants";

function shuffle(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

class PlayScreen extends Component {
  constructor(props) {
    super(props);
    const { bpm, chords, chordChanges, pattern } = this.props.route.params;

    const chordsBar = [[], [], []];

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
      beatIndex: null,
      chordsBar: chordsBar,
      beatSound: null,
    };
  }

  setSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/beat_1.m4a")
    );
    this.setState({ beatSound: sound });
  };

  beatIntervalID = null;

  componentDidMount = async () => {
    try {
      await this.setSound();
    } catch (error) {
      console.log(error);
    }

    this.beatIntervalID = setInterval(async () => {
      try {
        if (this.state.beatIndex !== null) {
          this.setState({
            beatIndex: this.state.beatIndex < 23 ? this.state.beatIndex + 1 : 0,
          });
        } else {
          this.setState({ beatIndex: 0 });
        }
      } catch (error) {
        console.log(error);
      }

      if (this.state.beatIndex % 2 === 0) {
        try {
          console.log("Playing Sound");
          console.log(this.state.beatIndex);
          await this.state.beatSound.replayAsync();
        } catch (error) {
          console.log(error);
        }
      }
    }, 1000 * (60.0 / (2 * this.props.route.params.bpm)));
    // This number is for both up and down, which is why we do 2 * bpm
  };

  componentWillUnmount = () => {
    clearInterval(this.beatIntervalID);
    console.log("Unloading Sound");
    this.state.beatSound.unloadAsync();
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
        <TouchableOpacity
          style={styles.touchableOpacityStyling}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon
            name="musical-note"
            color={color.primary}
            size={20 * windowHeightRatio}
          />
          <Text style={styles.textStyling}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 20 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityStyling: {
    flexDirection: "row",
    margin: 25,
    padding: 15,
    backgroundColor: color.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  screenStyling: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: color.primary,
  },
});

export default PlayScreen;

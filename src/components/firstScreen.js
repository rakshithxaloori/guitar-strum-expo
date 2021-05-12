import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import ChordSelect from "./chordSelect";
import BPMSelect from "./bpmSelect";
import PatternSelect from "./patternSelect";

import { color } from "../constants";

class FirstScreen extends Component {
  constructor(props) {
    super(props);

    const textChords = [
      "A",
      "Am",
      "C",
      "D",
      "Dm",
      "E",
      "Em",
      "F",
      "Fmaj7",
      "G",
    ];
    let chords = [];

    for (var i = 0; i < textChords.length; i++) {
      chords = [...chords, { chordText: textChords[i], isSelected: false }];
    }

    this.state = {
      chords: chords,
      bpm: 60,
      pattern: [0, 0, 0, 0, 0, 0, 0, 0],
      chordChanges: null,
      open: false,
    };
  }

  strumAlert = () => {
    showMessage({
      message: "Select atleast one strum",
      type: "info",
      icon: "auto",
      position: "bottom",
    });
  };

  chordsAlert = () => {
    showMessage({
      message: "Select atleast one chord",
      type: "info",
      icon: "auto",
      position: "bottom",
    });
  };

  confirmConfig = () => {
    // Check if atleast one strum selected
    if (this.state.pattern.indexOf(1) === -1) {
      this.strumAlert();
      return;
    }

    let finalSelectedChords = [];
    for (var i = 0; i < this.state.chords.length; i++) {
      if (this.state.chords[i].isSelected) {
        finalSelectedChords.push(this.state.chords[i].chordText);
      }
    }

    // Check if atleast one chord selected
    if (finalSelectedChords.length < 1) {
      this.chordsAlert();
      return;
    }

    this.props.navigation.navigate("Play", {
      chords: finalSelectedChords,
      bpm: this.state.bpm,
      pattern: this.state.pattern,
      chordChanges: this.state.chordChanges,
    });
  };

  selectChord = (chordObj) => {
    this.setState((prevState) => {
      let newChordsState = [...prevState.chords];
      let chordIndex = this.state.chords.findIndex(
        (findChord) => findChord === chordObj
      );
      let newSelectedChord = {
        ...newChordsState[chordIndex],
      };
      newSelectedChord.isSelected = !newSelectedChord.isSelected;
      newChordsState[chordIndex] = newSelectedChord;
      return { chords: newChordsState };
    });
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <ChordSelect
          chords={this.state.chords}
          selectChord={this.selectChord}
        />
        <BPMSelect
          bpm={this.state.bpm}
          setBPM={(bpmValue) => {
            this.setState({ bpm: bpmValue });
          }}
        />
        <PatternSelect
          pattern={this.state.pattern}
          changeStrum={(index) => {
            const newPattern = [...this.state.pattern];
            newPattern[index] = newPattern[index] === 0 ? 1 : 0;
            this.setState({ pattern: newPattern });
          }}
        />
        <TouchableOpacity
          style={styles.touchableOpacityStyling}
          onPress={this.confirmConfig}
        >
          <Text style={styles.touchableOpacityTextStyling}>Preview</Text>
        </TouchableOpacity>
        <FlashMessage ref="localFlashMessage" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  touchableOpacityTextStyling: {
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityStyling: {
    margin: 10,
    padding: 15,
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
  },
});

export default FirstScreen;

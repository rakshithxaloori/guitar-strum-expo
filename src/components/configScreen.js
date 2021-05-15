import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FlashMessage, { showMessage } from "react-native-flash-message";

import ChordChangesSelect from "./chordChangesSelect";
import ChordSelect from "./chordSelect";
import BPMSelect from "./bpmSelect";
import PatternSelect from "./patternSelect";

import { color } from "../constants";

class ConfigScreen extends Component {
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
      chordChanges: 1,
      open: false,
    };
  }

  flashAlert = (message, big = false) => {
    showMessage({
      message: message,
      type: "info",
      icon: "auto",
      position: "bottom",
      backgroundColor: color.secondary,
      style: { height: big ? 60 : 50 },
    });
  };

  confirmConfig = () => {
    // Check if atleast one strum selected
    if (this.state.pattern.indexOf(1) === -1) {
      this.flashAlert("Select atleast one strum");
      return;
    }

    let patternCount = 0;
    for (let i = 0; i < this.state.pattern.length; i += 2) {
      if (this.state.pattern[i] === 1 || this.state.pattern[i + 1] === 1)
        patternCount++;
    }

    if (patternCount < this.state.chordChanges) {
      this.flashAlert(
        `Select more strums for ${this.state.chordChanges} chord changes in a bar`,
        true
      );
      return;
    }

    let finalSelectedChords = [];
    for (let i = 0; i < this.state.chords.length; i++) {
      if (this.state.chords[i].isSelected) {
        finalSelectedChords.push(this.state.chords[i].chordText);
      }
    }

    // Check if atleast one chord selected
    if (finalSelectedChords.length < 1) {
      this.flashAlert("Select atleast one chord");
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
      <View style={styles.screenStyling}>
        <ChordSelect
          chords={this.state.chords}
          selectChord={this.selectChord}
        />
        <ChordChangesSelect
          chordChanges={this.state.chordChanges}
          setChordChanges={(value) => {
            this.setState({ chordChanges: value });
          }}
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
          <Icon name="musical-note" color={color.primary} size={20} />
          <Text style={styles.textStyling}>Play</Text>
        </TouchableOpacity>
        <FlashMessage ref="localFlashMessage" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 20,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityStyling: {
    flexDirection: "row",
    margin: 25,
    padding: 15,
    backgroundColor: color.tertiary,
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

export default ConfigScreen;

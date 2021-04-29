import React, { Component } from "react";
import { View, Button } from "react-native";

import ChordSelect from "./chordSelect";
import BPMSelect from "./bpmSelect";
import PatternSelect from "./patternSelect";

class PrePlay extends Component {
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
      pattern: [],
    };
  }

  confirmConfig = () => {
    // Check atleast one chord, one 1 in pattern

    let finalSelectedChords = [];
    for (var i = 0; i < this.state.chords.length; i++) {
      if (this.state.chords[i].isSelected) {
        finalSelectedChords.push(this.state.chords[i].chordText);
      }
    }

    this.props.navigation.navigate("Play", {
      pattern: [1, 1, 1, 0, 1, 0, 1, 1],
      bpm: this.state.bpm,
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
      <View>
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
          setPattern={(newPattern) => {
            this.setState({ pattern: newPattern });
          }}
        />
        <Button title="Press me!" onPress={this.confirmConfig} />
      </View>
    );
  };
}

export default PrePlay;

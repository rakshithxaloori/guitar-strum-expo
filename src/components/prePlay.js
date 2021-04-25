import React, { Component } from "react";
import { View, Button } from "react-native";

import ChordSelect from "./chordSelect";
import BPMSelect from "./bpmSelect";

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

    for (i = 0; i < textChords.length; i++) {
      chords = [...chords, { chordText: textChords[i], isSelected: false }];
    }

    this.state = {
      chords: chords,
    };
  }

  confirmSelectedChords = () => {
    let finalSelectedChords = [];
    for (i = 0; i < this.state.chords.length; i++) {
      if (this.state.chords[i].isSelected) {
        finalSelectedChords.push(this.state.chords[i].chordText);
      }
    }
    console.log("Final selected chords", finalSelectedChords);
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
        <BPMSelect />
        <Button title="Press me!" onPress={this.confirmSelectedChords} />
      </View>
    );
  };
}

export default PrePlay;

import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button } from "react-native";

class ChordsSelect extends Component {
  constructor(props) {
    super(props);
    const chords = ["A", "Am", "C", "D", "Dm", "E", "Em", "G"];
    let selectedChords = [];

    for (i = 0; i < chords.length; i++) {
      selectedChords = [
        ...selectedChords,
        { chordText: chords[i], isSelected: false },
      ];
    }

    this.state = {
      selectedChords: selectedChords,
    };
  }

  confirmSelectedChords = () => {
    console.log(
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
    );
    for (i = 0; i < this.state.selectedChords.length; i++) {
      if (this.state.selectedChords[i].isSelected) {
        console.log(this.state.selectedChords[i].chordText, "SELECTED");
      }
    }
  };

  render = () => {
    const {
      textStyling,
      touchableOpacityNormalStyling,
      touchableOpacitySelectedStyling,
      viewStyling,
    } = styles;
    return (
      <View style={viewStyling}>
        {this.state.selectedChords.map((chordObj, index) => (
          <TouchableOpacity
            key={index}
            style={
              chordObj.isSelected
                ? touchableOpacitySelectedStyling
                : touchableOpacityNormalStyling
            }
            onPress={() => {
              console.log("--------------------------------------------------");
              console.log(chordObj, "SELECTED");
              this.setState((prevState) => {
                let newSelectedChordsState = [...prevState.selectedChords];
                let chordIndex = this.state.selectedChords.findIndex(
                  (findChord) => findChord === chordObj
                );
                console.log(chordIndex);
                let newSelectedChord = {
                  ...newSelectedChordsState[chordIndex],
                };
                console.log("BEFORE UPDATE", newSelectedChord);
                newSelectedChord.isSelected = !newSelectedChord.isSelected;
                newSelectedChordsState[chordIndex] = newSelectedChord;
                console.log("AFTER UPDATE", newSelectedChord);
                return { selectedChords: newSelectedChordsState };
              });
            }}
          >
            <Text style={textStyling}>{chordObj.chordText}</Text>
          </TouchableOpacity>
        ))}
        <Button title="Press me!" onPress={this.confirmSelectedChords} />
      </View>
    );
  };
}

const styles = {
  textStyling: {
    fontSize: 22,
  },
  touchableOpacityNormalStyling: {
    padding: 10,
    margin: 10,
    backgroundColor: "gainsboro",
  },
  touchableOpacitySelectedStyling: {
    padding: 10,
    margin: 10,
    backgroundColor: "grey",
  },
  viewStyling: {
    // flex: 1,
    // flexDirection: "row",
    backgroundColor: "gainsboro",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ChordsSelect;

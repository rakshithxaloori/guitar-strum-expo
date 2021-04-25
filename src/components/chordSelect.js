import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button } from "react-native";

class ChordsSelect extends Component {
  constructor(props) {
    super(props);
    const chords = ["A", "Am", "C", "D", "Dm", "E", "Em", "F", "Fmaj7", "G"];
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
    let finalSelectedChords = [];
    for (i = 0; i < this.state.selectedChords.length; i++) {
      if (this.state.selectedChords[i].isSelected) {
        finalSelectedChords.push(this.state.selectedChords[i].chordText);
      }
    }
    this.props.selectChords(finalSelectedChords);
  };

  render = () => {
    const {
      textStyling,
      touchableOpacityNormalStyling,
      touchableOpacitySelectedStyling,
      viewStyling,
    } = styles;
    return (
      <View>
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
                this.setState((prevState) => {
                  let newSelectedChordsState = [...prevState.selectedChords];
                  let chordIndex = this.state.selectedChords.findIndex(
                    (findChord) => findChord === chordObj
                  );
                  let newSelectedChord = {
                    ...newSelectedChordsState[chordIndex],
                  };
                  newSelectedChord.isSelected = !newSelectedChord.isSelected;
                  newSelectedChordsState[chordIndex] = newSelectedChord;
                  return { selectedChords: newSelectedChordsState };
                });
              }}
            >
              <Text style={textStyling}>{chordObj.chordText}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button title="Press me!" onPress={this.confirmSelectedChords} />
      </View>
    );
  };
}

const inheritStyles = {
  touchableStyling: {
    padding: 10,
    margin: 10,
    width: 75,
    borderWidth: 5,
    borderRadius: 20,
  },
};

const styles = {
  textStyling: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15,
  },

  touchableOpacityNormalStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: "gainsboro",
    borderColor: "black",
  },
  touchableOpacitySelectedStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: "grey",
    borderColor: "red",
  },
  viewStyling: {
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

export default ChordsSelect;

import React, { Component } from "react";
import { View } from "react-native";

import ChordSelect from "./chordSelect";

class PrePlay extends Component {
  constructor(props) {
    super(props);
  }

  selectChords = (finalSelectedChords) => {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("FINAL SELECTED CHORDS", finalSelectedChords);
  };

  render = () => {
    return (
      <View>
        <ChordSelect selectChords={this.selectChords} />
      </View>
    );
  };
}

export default PrePlay;

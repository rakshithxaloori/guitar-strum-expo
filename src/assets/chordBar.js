import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { color } from "../constants";

const ChordBar = (props) => {
  const renderChords = () => {
    const chords = props.chords;
    const chordsList = [];
    for (var i = 0; i < props.chords.length; i++) {
      if (props.chords[i] !== null) {
        chordsList.push(
          <Text key={i} style={styles.textStyling}>
            {chords[i]}
          </Text>
        );
      }
    }
    return chordsList;
  };
  return <View style={styles.listStyling}>{renderChords()}</View>;
};

const styles = StyleSheet.create({
  textStyling: {
    flex: 1,
    color: color.primary,
    fontSize: 25,
  },
  listStyling: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: color.tertiary,
    borderColor: color.secondary,
    borderWidth: 3,
    paddingHorizontal: 10,
  },
});

export default ChordBar;

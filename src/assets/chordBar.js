import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { color, windowHeightRatio } from "../constants";

const ChordBar = (props) => {
  const renderChords = () => {
    const { chords } = props;
    const chordsList = [];
    for (let i = 0; i < chords.length; i += 2) {
      let textStr = "";
      if (chords[i] !== null || chords[i + 1] !== null) {
        textStr = chords[i];
      } else {
        if (chords[i] === null && chords[i + 1] === null) {
          textStr = "  ";
        }
      }
      chordsList.push(
        <Text key={i} style={styles.textStyling}>
          {textStr}
        </Text>
      );
      if (i <= 4)
        chordsList.push(<View key={i + 8} style={styles.verticleLine}></View>);
    }
    return chordsList;
  };
  return <View style={styles.listStyling}>{renderChords()}</View>;
};

const styles = StyleSheet.create({
  textStyling: {
    flex: 1,
    color: color.primary,
    fontSize: 25 * windowHeightRatio,
    textAlign: "center",
  },
  verticleLine: {
    height: "100%",
    width: 3,
    backgroundColor: color.primary,
  },
  listStyling: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChordBar;

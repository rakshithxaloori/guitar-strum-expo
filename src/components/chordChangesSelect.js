import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { color, windowHeightRatio } from "../constants";

const ChordChangesSelect = (props) => {
  return (
    <View style={styles.viewStyling}>
      <Slider
        minimumTrackTintColor={color.secondary}
        thumbTintColor={color.secondary}
        maximumTrackTintColor={color.tertiary}
        value={props.chordChanges}
        step={1}
        minimumValue={1}
        maximumValue={4}
        onValueChange={(value) => props.setChordChanges(value)}
      />
      <View style={styles.textViewStyling}>
        <Text style={[styles.textStyling, { fontWeight: "bold" }]}>
          {props.chordChanges + " "}
        </Text>
        <Text style={styles.textStyling}>
          Chord {props.chordChanges === 1 ? "Change" : "Changes"} in a Bar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    color: color.secondary,
    fontSize: 14 * windowHeightRatio,
    alignItems: "center",
    justifyContent: "center",
  },
  textViewStyling: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyling: {
    margin: 10,
    padding: 10,
  },
});

export default ChordChangesSelect;

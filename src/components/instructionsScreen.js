import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { color } from "../constants";

const InstructionsScreen = () => {
  const instructions = [
    "Select atleast two chords to begin with. If you are a beginner, start with any two of A, D or E chords",
    "Minimum BPM you can select is 30 and the maximum is 240 (Hypersonic mode)",
    "The number of chord changes you can choose in a bar is 1 to 4(since there are only 4 beats at max)",
    "Choose atleast 2 strums, an up or down from a set, an up or down from other set, for 1 chord change",
    "Choose an up or down from all sets(pair that has up and down strum), if you want to pracitse 4 chord changes in a bar",
  ];

  return (
    <View style={styles.screenStyling}>
      {instructions.map((instruction, index) => (
        <Text
          key={index}
          style={styles.textStyling}
        >{`\u2022 ${instruction}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: { color: color.secondary },
  screenStyling: {
    flex: 1,
    padding: 30,
    backgroundColor: color.primary,
  },
});

export default InstructionsScreen;

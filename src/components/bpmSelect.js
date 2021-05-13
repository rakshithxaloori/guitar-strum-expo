import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { color } from "../constants";

const BPMSelect = (props) => {
  return (
    <View style={styles.viewStyling}>
      <Slider
        minimumTrackTintColor={color.secondary}
        thumbTintColor={color.secondary}
        maximumTrackTintColor={color.tertiary}
        value={props.bpm}
        step={1}
        minimumValue={10}
        maximumValue={240}
        onValueChange={(value) => props.setBPM(value)}
      />
      <View style={styles.textViewStyling}>
        <Text style={styles.textStyling}>{props.bpm + " "} BPM </Text>
        <Text style={[styles.textStyling, { fontWeight: "bold" }]}>
          {props.bpm >= 180
            ? "Insane"
            : props.bpm >= 120
            ? "Sprint"
            : props.bpm >= 90
            ? "Agile"
            : "Breeze"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    color: color.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  textViewStyling: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyling: {
    margin: 10,
    padding: 10,
  },
});

export default BPMSelect;

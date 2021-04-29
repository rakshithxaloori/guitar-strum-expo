import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const BPMSelect = (props) => {
  return (
    <View style={styles.viewStyling}>
      <Slider
        value={props.bpm}
        step={1}
        minimumValue={10}
        maximumValue={240}
        onValueChange={(value) => props.setBPM(value)}
      />
      <Text>
        {props.bpm + " "} BPM{" "}
        {props.bpm > 180
          ? "Insane"
          : props.bpm > 120
          ? "Sprint"
          : props.bpm > 90
          ? "Agile"
          : "Breeze"}
      </Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyling: {
    margin: 20,
  },
});

export default BPMSelect;

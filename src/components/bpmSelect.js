import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/AntDesign";

import { color, windowHeightRatio } from "../constants";

const BPMSelect = (props) => {
  const minBPMValue = 30;
  const maxBPMValue = 240;

  return (
    <View style={styles.viewStyling}>
      <Slider
        minimumTrackTintColor={color.secondary}
        thumbTintColor={color.secondary}
        maximumTrackTintColor={color.tertiary}
        value={props.bpm}
        step={1}
        minimumValue={minBPMValue}
        maximumValue={maxBPMValue}
        onValueChange={(value) => props.setBPM(value)}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.iconTouchableStyling}
          onPress={() => {
            if (props.bpm > minBPMValue) props.setBPM(props.bpm - 1);
          }}
        >
          <Icon
            name="minuscircle"
            color={color.secondary}
            size={25 * windowHeightRatio}
          />
        </TouchableOpacity>
        <View style={styles.textViewStyling}>
          <Text style={styles.textStyling}>{props.bpm + " "} BPM </Text>
          <Text style={[styles.textStyling, { fontWeight: "bold" }]}>
            {props.bpm >= 220
              ? "Kage"
              : props.bpm >= 180
              ? "Jonin"
              : props.bpm >= 120
              ? "Chunin"
              : props.bpm >= 90
              ? "Genin"
              : "Academy"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconTouchableStyling}
          onPress={() => {
            if (props.bpm < maxBPMValue) props.setBPM(props.bpm + 1);
          }}
        >
          <Icon
            name="pluscircle"
            color={color.secondary}
            size={25 * windowHeightRatio}
          />
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
  },
  iconTouchableStyling: {
    paddingHorizontal: 25,
  },
  viewStyling: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
});

export default BPMSelect;

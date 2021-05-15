import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/AntDesign";

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
        minimumValue={30}
        maximumValue={240}
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
            props.setBPM(props.bpm - 1);
          }}
        >
          <Icon name="minuscircle" color={color.secondary} size={25} />
        </TouchableOpacity>
        <View style={styles.textViewStyling}>
          <Text style={styles.textStyling}>{props.bpm + " "} BPM </Text>
          <Text style={[styles.textStyling, { fontWeight: "bold" }]}>
            {props.bpm >= 180
              ? "Hypersonic"
              : props.bpm >= 120
              ? "Supersonic"
              : props.bpm >= 90
              ? "Transonic"
              : "Subsonic"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconTouchableStyling}
          onPress={() => {
            props.setBPM(props.bpm + 1);
          }}
        >
          <Icon name="pluscircle" color={color.secondary} size={25} />
        </TouchableOpacity>
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
  iconTouchableStyling: {
    paddingHorizontal: 25,
  },
  viewStyling: {
    margin: 10,
    padding: 10,
  },
});

export default BPMSelect;

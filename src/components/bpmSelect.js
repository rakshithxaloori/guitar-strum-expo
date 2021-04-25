import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const BPMSelect = (props) => {
  return (
    <View style={styles.viewStyling}>
      <Slider
        value={props.bpm}
        step={1}
        minimumValue={10}
        maximumValue={280}
        onValueChange={(value) => props.setBPM(value)}
      />
      <Text>{props.bpm + " "} BPM</Text>
    </View>
  );
};

const styles = {
  viewStyling: {
    margin: 20,
  },
};

export default BPMSelect;

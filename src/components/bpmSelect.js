import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "react-native-sliders";

const BPMSelect = (props) => {
  const [bpm, setBPM] = useState(10);
  return (
    <View style={styles.viewStyling}>
      <Slider
        value={bpm}
        step={1}
        minimumValue={10}
        maximumValue={280}
        onValueChange={(value) => setBPM(value)}
      />
      <Text>{bpm + " "} BPM</Text>
    </View>
  );
};

const styles = {
  viewStyling: {
    margin: 20,
  },
};

export default BPMSelect;

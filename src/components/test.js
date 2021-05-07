import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Rect } from "react-native-svg";

import Arrow from "../assets/arrow";

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const TouchArrow = ({ index, highlight, size = 100 }) => {
  return (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => {
        console.log(index);
      }}
    >
      <Svg height={size} width={size} viewBox="0 0 100 100">
        <Arrow
          opaque={index}
          direction={index % 2 === 0}
          highlight={highlight}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const PatternSelect = (props) => {
  const pattern = [1, 1, 0, 0, 0, 0, 0, 0];
  return (
    <View style={[styles.touch, { flexDirection: "row" }]}>
      {pattern.map((highlight, index) => (
        <TouchArrow key={index} index={index} highlight={highlight} />
      ))}
    </View>
  );
};

export default PatternSelect;

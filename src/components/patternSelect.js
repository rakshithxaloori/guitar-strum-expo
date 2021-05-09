import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Rect } from "react-native-svg";

import Arrow from "../assets/arrow";

const styles = StyleSheet.create({
  touchableArrowStyling: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  arrowsStyling: { flexDirection: "row", borderColor: "black", borderWidth: 5 },
});

const TouchArrow = ({ index, highlight, changeStrum, size = 100 }) => {
  return (
    <TouchableOpacity
      style={styles.touchableArrowStyling}
      onPress={() => {
        changeStrum(index);
      }}
    >
      <Svg height={size} width={size} viewBox="0 0 35 100">
        <Arrow
          opaque={true}
          direction={index % 2 === 0}
          highlight={highlight}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const PatternSelect = (props) => {
  return (
    <View style={[styles.touchableArrowStyling, styles.arrowsStyling]}>
      {props.pattern.map((highlight, index) => (
        <TouchArrow
          key={index}
          index={index}
          highlight={highlight}
          changeStrum={props.changeStrum}
        />
      ))}
    </View>
  );
};

export default PatternSelect;

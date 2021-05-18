import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";

const TouchArrow = ({ index, highlight, changeStrum, width, height }) => {
  return (
    <TouchableOpacity
      style={styles.touchableArrowStyling}
      onPress={() => {
        changeStrum(index);
      }}
    >
      <Svg viewBox={`-5 0 ${width} ${height}`}>
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
  let { width, height } = Dimensions.get("window");
  width = width / 8;
  height = height / 10;
  return (
    <View style={[styles.touchableArrowStyling, styles.arrowsStyling]}>
      {props.pattern.map((highlight, index) => (
        <TouchArrow
          key={index}
          index={index}
          highlight={highlight}
          changeStrum={props.changeStrum}
          width={width}
          height={height}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  touchableArrowStyling: {
    flex: 1,
    alignItems: "center",
  },
  arrowsStyling: {
    flexDirection: "row",
  },
});

export default PatternSelect;

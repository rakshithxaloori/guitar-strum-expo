import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";
import CountAnd from "../assets/countAnd";
import ChordBar from "../assets/chordBar";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const Bar = (props) => {
  return (
    <View style={styles.bar}>
      <View style={styles.horizontalLine}></View>
      <ChordBar chords={props.chords} />

      <View style={[styles.arrows, { flexDirection: "row" }]}>
        {props.pattern.map((patternVal, index) => (
          <View key={index} style={styles.arrow}>
            <Svg
              viewBox={`0 0 ${35 * windowWidthRatio} ${80 * windowHeightRatio}`}
            >
              <Arrow
                opaque={patternVal === 1}
                direction={
                  props.patternType === 0
                    ? index % 2 === 0
                    : props.patternType % 2 === 0
                }
                highlight={
                  index === props.beatIndex % 8 &&
                  props.barIndex === Math.floor(props.beatIndex / 8)
                }
              />
            </Svg>
          </View>
        ))}
      </View>

      <CountAnd />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    width: "100%",
    borderBottomColor: color.secondary,
    borderBottomWidth: 5,
  },
  arrow: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  arrows: {
    flex: 2,
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    flex: 1,
    // borderColor: color.secondary,
    // borderWidth: 2,
    paddingHorizontal: 10,
  },
});

export default Bar;

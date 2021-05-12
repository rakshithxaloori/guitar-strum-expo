import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";
import CountAnd from "../assets/countAnd";
import ChordBar from "../assets/chordBar";

import { color } from "../constants";

const Bar = (props) => {
  const size = 70;
  return (
    <View style={styles.barStyling}>
      <View style={styles.horizontalLine}></View>
      <ChordBar chords={props.chords} />

      <View style={[styles.arrowsStyling, { flexDirection: "row" }]}>
        {props.pattern.map((patternVal, index) => (
          <View key={index} style={styles.arrowStyling}>
            <Svg height={size} width={size} viewBox="0 0 35 80">
              <Arrow
                opaque={patternVal === 1}
                direction={index % 2 === 0}
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
  arrowStyling: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsStyling: {
    flex: 2,
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  barStyling: {
    flex: 1,
    // borderColor: color.secondary,
    // borderWidth: 2,
    paddingHorizontal: 10,
  },
});

export default Bar;

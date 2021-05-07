import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";
import CountAnd from "../assets/countAnd";
import ChordBar from "../assets/chordBar";

const Bar = (props) => {
  const size = 100;
  return (
    <View style={styles.barStyling}>
      <View style={[styles.arrowsStyling, { flexDirection: "row" }]}>
        {props.pattern.map((patternVal, index) => (
          <View style={styles.arrowStyling}>
            <Svg key={index} height={size} width={size} viewBox="0 0 35 100">
              <Arrow
                opaque={patternVal}
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
      <CountAnd xInit={props.xInit} xSep={props.xSep} y={props.yCountAnd} />
      {/* <ChordBar
        chords={["A", null, "D", null, "E", null, "Dm", null]}
        xInit={props.xInit}
        xSep={props.xSep}
        y={props.yChordBar}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  arrowStyling: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsStyling: {
    flex: 3,
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  barStyling: {
    flex: 1,
    borderColor: "black",
    borderWidth: 5,
  },
});

export default Bar;

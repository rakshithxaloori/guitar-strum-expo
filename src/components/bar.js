import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";
import CountAnd from "../assets/countAnd";
import ChordBar from "../assets/chordBar";

const Bar = (props) => {
  return (
    <View>
      <Svg>
        <View style={[styles.touch, { flexDirection: "row" }]}>
          {props.pattern.map((patternVal, index) => (
            <Arrow
              key={index}
              opaque={patternVal}
              direction={index % 2 === 0}
              highlight={
                index === props.beatIndex % 8 &&
                props.barIndex === Math.floor(props.beatIndex / 8)
              }
            />
          ))}
        </View>
        {/* <CountAnd xInit={props.xInit} xSep={props.xSep} y={props.yCountAnd} />
        <ChordBar
          chords={["A", null, "D", null, "E", null, "Dm", null]}
          xInit={props.xInit}
          xSep={props.xSep}
          y={props.yChordBar}
        /> */}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Bar;

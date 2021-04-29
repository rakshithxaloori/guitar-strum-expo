import React from "react";
import { View } from "react-native";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";
import CountAnd from "../assets/countAnd";
import ChordBar from "../assets/chordBar";

const Bar = (props) => {
  const renderArrows = () => {
    const arrowsList = [];
    for (var i = 0; i < props.pattern.length; i++) {
      if (props.pattern[i]) {
        if (i % 2 === 0)
          arrowsList.push(
            <DownArrow
              key={i}
              highlight={
                i === props.beatIndex % 8 &&
                props.barIndex === Math.floor(props.beatIndex / 8)
              }
              x={props.xInit + i * props.xSep}
              y1={props.yArrow}
              arrowLineHeight={props.arrowLineHeight}
            />
          );
        else
          arrowsList.push(
            <UpArrow
              key={i}
              highlight={
                i === props.beatIndex % 8 &&
                props.barIndex === Math.floor(props.beatIndex / 8)
              }
              x={props.xInit + i * props.xSep}
              y1={props.yArrow}
              arrowLineHeight={props.arrowLineHeight}
            />
          );
      }
    }
    return arrowsList;
  };

  return (
    <View>
      <Svg>
        {renderArrows()}
        <CountAnd xInit={props.xInit} xSep={props.xSep} y={props.yCountAnd} />
        <ChordBar
          chords={["A", null, "D", null, "E", null, "Dm", null]}
          xInit={props.xInit}
          xSep={props.xSep}
          y={props.yChordBar}
        />
      </Svg>
      {/* <Divider style={{ color: "black" }} /> */}
    </View>
  );
};

export default Bar;

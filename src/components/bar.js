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
    for (var i = 0; i < props.barConfig.length; i++) {
      if (props.barConfig[i]) {
        if (i % 2 === 0)
          arrowsList.push(
            <DownArrow
              key={i}
              highlight={
                i === props.beatIndex % 8 &&
                props.barIndex === Math.floor(props.beatIndex / 8)
              }
              x={props.xInit + i * props.xSep}
              y1={props.arrowY1}
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
              y1={props.arrowY1}
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
        <CountAnd
          xInit={props.xInit}
          xSep={props.xSep}
          y={props.arrowY1 + 100}
        />
        <ChordBar
          chords={["A", null, "D", null, null]}
          xInit={props.xInit}
          xSep={props.xSep}
          y={props.arrowY1}
        />
      </Svg>
      {/* <Divider style={{ color: "black" }} /> */}
    </View>
  );
};

export default Bar;

import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-paper";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";
import Fork from "../assets/fork";

const Bar = (props) => {
  console.log(props);
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
    console.log(arrowsList.length);
    return arrowsList;
  };

  const renderForks = () => {
    const forksList = [];
    for (var i = 0; i < props.barConfig.length / 2; i++) {
      forksList.push(
        <Fork
          key={i}
          x={props.xInit + 2 * i * props.xSep}
          xSep={props.xSep}
          y1={props.arrowY1 + 75}
          forkHeight={props.forkHeight}
        />
      );
    }
    console.log(forksList.length);
    return forksList;
  };

  return (
    <View>
      <Svg>
        {renderArrows()}
        {renderForks()}
      </Svg>
      <Divider style={{ color: "black" }} />
    </View>
  );
};

export default Bar;

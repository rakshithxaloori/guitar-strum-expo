import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Svg } from "react-native-svg";

import UpArrow from "../assets/upArrow";
import DownArrow from "../assets/downArrow";

const PatternSelect = (props) => {
  const renderArrows = () => {
    const arrowsList = [];
    for (let i = 0; i < props.pattern.length; i++) {
      // console.log("i value", i);
      if (i % 2 === 0)
        arrowsList.push(
          <TouchableOpacity key={i} onPress={() => props.changeStrum(i)}>
            <DownArrow
              highlight={props.pattern[i] === 1}
              x={props.xInit + i * props.xSep}
              y1={props.y}
              arrowLineHeight={props.arrowLineHeight}
            />
          </TouchableOpacity>
        );
      else
        arrowsList.push(
          <TouchableOpacity key={i} onPress={() => props.changeStrum(i)}>
            <UpArrow
              highlight={props.pattern[i] === 1}
              x={props.xInit + i * props.xSep}
              y1={props.y}
              arrowLineHeight={props.arrowLineHeight}
            />
          </TouchableOpacity>
        );
    }
    return arrowsList;
  };
  return <View style={{ height: 100 }}>{renderArrows()}</View>;
};

export default PatternSelect;

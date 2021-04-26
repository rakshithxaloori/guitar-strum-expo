import React from "react";
import { Svg, Line } from "react-native-svg";

const Fork = (props) => {
  const point = {
    x: props.x,
    y1: props.y1,
    y2: props.forkHeight + props.y1,
  };

  return (
    <Svg height="1000" width="1000">
      <Line
        x1={point.x}
        y1={point.y1}
        x2={point.x}
        y2={point.y2}
        stroke="#1abc9c"
        strokeWidth="10"
      />
      <Line
        x1={point.x}
        y1={point.y2}
        x2={point.x + props.xSep}
        y2={point.y2}
        stroke="#1abc9c"
        strokeWidth="10"
      />
      <Line
        x1={point.x + props.xSep}
        y1={point.y1}
        x2={point.x + props.xSep}
        y2={point.y2}
        stroke="#1abc9c"
        strokeWidth="10"
      />
    </Svg>
  );
};

export default Fork;

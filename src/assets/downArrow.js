import React from "react";
import { Svg, G, Path, Line } from "react-native-svg";

const DownArrow = (props) => {
  const point = {
    x: props.x,
    y1: props.y1,
    y2: props.arrowHeight + props.y1,
  };

  return (
    <Svg height="500" width="1000">
      <G
        rotation={(Math.atan2(point.y2 - point.y1, 0) * 180) / Math.PI - 135}
        origin={`${point.x}, ${point.y2}`}
      >
        <Path
          d={`M ${point.x + 8} ${point.y2 + 8} L ${point.x - 10} ${
            point.y2 + 10
          } L ${point.x - 8} ${point.y2 - 8} z`}
          fill="#1abc9c"
          stroke="#1abc9c"
        />
      </G>

      <Line
        x1={point.x}
        y1={point.y1}
        x2={point.x}
        y2={point.y2}
        stroke="#1abc9c"
        strokeWidth="10"
      />
    </Svg>
  );
};

export default DownArrow;

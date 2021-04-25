import React from "react";
import { Svg, G, Path, Line } from "react-native-svg";

const Arrow = (props) => {
  console.log(props);
  const fill = false;
  const point = {
    x: props.x,
    y1: 20,
    y2: 120,
  };

  return (
    <Svg height="1000" width="1000">
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

export default Arrow;

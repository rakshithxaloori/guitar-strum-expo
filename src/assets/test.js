import React from "react";
import { Svg, Polygon } from "react-native-svg";

const Test = (props) => {
  const lineHalfWidth = 5;
  const arrowCoordinate = 8;
  const point = {
    x: 16,
    y1: 0,
    y2: 50,
    arrowHeadWidth: arrowCoordinate * Math.sqrt(2) - lineHalfWidth,
    arrowHeadHeight: 2 * lineHalfWidth * Math.sqrt(2),
  };

  const points = `
  ${point.x - lineHalfWidth},${point.y1}
  ${point.x + lineHalfWidth},${point.y1} 
  ${point.x + lineHalfWidth},${point.y2} 
  ${point.x + lineHalfWidth + point.arrowHeadWidth},${point.y2} 
  ${point.x},${point.y2 + point.arrowHeadHeight} 
  ${point.x - lineHalfWidth - point.arrowHeadWidth},${point.y2} 
  ${point.x - lineHalfWidth},${point.y2}
  `;

  return (
    <Svg>
      <Polygon
        points={points}
        fill={props.highlight ? "#1abc9c" : "none"}
        stroke="#1abc9c"
        strokeWidth="1"
      />
    </Svg>
  );
};

export default Test;
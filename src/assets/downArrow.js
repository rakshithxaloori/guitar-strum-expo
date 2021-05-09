import React from "react";
import { Svg, Polygon } from "react-native-svg";

const DownArrow = (props) => {
  const { point, lineHalfWidth } = props;

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
        fill={props.opaque ? (props.highlight ? "#1abc9c" : "none") : "none"}
        stroke={props.opaque ? "#1abc9c" : "none"}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default DownArrow;

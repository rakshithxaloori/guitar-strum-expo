import React from "react";
import { Svg, Polygon } from "react-native-svg";

const UpArrow = (props) => {
  const { point, lineHalfWidth } = props;

  const points = `
  ${point.x + lineHalfWidth},${point.y2} 
  ${point.x - lineHalfWidth},${point.y2}
  ${point.x - lineHalfWidth},${point.y1}
  ${point.x - lineHalfWidth - point.arrowHeadWidth},${point.y1} 
  ${point.x},${point.y1 - point.arrowHeadHeight}
  ${point.x + lineHalfWidth + point.arrowHeadWidth},${point.y1} 
  ${point.x + lineHalfWidth},${point.y1} 
  `;

  return (
    <Svg>
      <Polygon
        points={points}
        fill={props.opaque ? (props.highlight ? "#ffeb1b" : "none") : "none"}
        stroke={props.opaque ? "#ffeb1b" : "none"}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default UpArrow;

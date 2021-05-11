import React from "react";
import { Svg, Polygon } from "react-native-svg";

import { color } from "../constants";

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
        fill={
          props.opaque ? (props.highlight ? color.tertiary : "none") : "none"
        }
        stroke={props.opaque ? color.tertiary : "none"}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default UpArrow;

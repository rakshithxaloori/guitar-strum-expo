import React from "react";
import { Svg, Polygon } from "react-native-svg";

import { color } from "../constants";

const DownArrow = (props) => {
  const { point, lineHalfWidth } = props;
  point.y2 += 2;
  point.y1 += 2;

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
        fill={
          props.opaque ? (props.highlight ? color.secondary : "none") : "none"
        }
        stroke={props.opaque ? color.secondary : "none"}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default DownArrow;

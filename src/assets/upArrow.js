import React from "react";
import { Svg, Polygon } from "react-native-svg";

import { color, windowWidthRatio } from "../constants";

const UpArrow = (props) => {
  const { point, lineHalfWidth } = props;
  point.y2 += point.arrowHeadHeight + 2;
  point.y1 += point.arrowHeadHeight + 2;

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
          props.opaque ? (props.highlight ? color.secondary : "none") : "none"
        }
        stroke={props.opaque ? color.secondary : "none"}
        strokeWidth={2 * windowWidthRatio}
      />
    </Svg>
  );
};

export default UpArrow;

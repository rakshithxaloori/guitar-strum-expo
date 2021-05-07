import React from "react";
import { StyleSheet } from "react-native";

import UpArrow from "./upArrow";
import DownArrow from "./downArrow";

const Arrow = ({ opaque, direction, highlight }) => {
  // opaque if strum selected
  // direction 0 - up, 1 - down
  // highlight strum now
  const lineHalfWidth = 5;
  const arrowCoordinate = 8;
  const point = {
    x: 16,
    y1: 0,
    y2: 50,
    arrowHeadWidth: arrowCoordinate * Math.sqrt(2) - lineHalfWidth,
    arrowHeadHeight: 2 * lineHalfWidth * Math.sqrt(2),
  };
  if (direction)
    return (
      <DownArrow
        style={styles.arrow}
        point={point}
        lineHalfWidth={lineHalfWidth}
        highlight={highlight}
      />
    );
  else
    return (
      <UpArrow
        style={styles.arrow}
        point={point}
        lineHalfWidth={lineHalfWidth}
        highlight={highlight}
      />
    );
};

const styles = StyleSheet.create({
  arrow: { flex: 1 },
});

export default Arrow;

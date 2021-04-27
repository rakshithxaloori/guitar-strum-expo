import React from "react";
import { Svg, Rect, Text as SvgText } from "react-native-svg";

const ChordBar = (props) => {
  const renderChords = () => {
    const chords = props.chords;
    const chordsList = [];
    for (var i = 0; i < props.chords.length; i++) {
      if (props.chords[i] !== null) {
        chordsList.push(
          <SvgText
            fill="white"
            stroke="white"
            fontSize="20"
            fontWeight="bold"
            x={props.xInit + i * props.xSep}
            y={props.y}
          >
            {chords[i]}
          </SvgText>
        );
      }
    }
    return chordsList;
  };
  return (
    <Svg>
      <Rect
        x={props.xInit}
        y={props.y}
        width={props.xSep * 7}
        height="50"
        fill="rgb(0,0,255)"
        strokeWidth="3"
        stroke="rgb(0,0,0)"
      />
      {renderChords()}
    </Svg>
  );
};

export default ChordBar;

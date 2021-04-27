import React from "react";
import { Svg, Text as SvgText } from "react-native-svg";

const CountAnd = (props) => {
  const style = {
    svgTextStyling: {
      fill: "#ce8529",
      fontSize: 20,
      fontWeight: "bolder",
    },
  };

  const renderItems = () => {
    const textList = [];
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        textList.push(
          <SvgText
            key={i}
            style={style.svgTextStyling}
            x={props.xInit + i * props.xSep}
            y={props.y}
            textAnchor="middle"
          >
            {(i / 2 + 1).toString()}
          </SvgText>
        );
      } else {
        textList.push(
          <SvgText
            key={i}
            style={style.svgTextStyling}
            x={props.xInit + i * props.xSep}
            y={props.y}
            textAnchor="middle"
          >
            {"&"}
          </SvgText>
        );
      }
    }

    return textList;
  };

  return <Svg>{renderItems()}</Svg>;
};

export default CountAnd;

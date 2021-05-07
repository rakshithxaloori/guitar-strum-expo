import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Text as SvgText } from "react-native-svg";

const CountAnd = (props) => {
  const style = {
    svgTextStyling: {
      flex: 1,
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
            viewBox="0 0 32 32"
            // x={props.xInit + i * props.xSep}
            // y={props.y}
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
            viewBox="0 0 32 32"
            // x={props.xInit + i * props.xSep}
            // y={props.y}
            textAnchor="middle"
          >
            {"&"}
          </SvgText>
        );
      }
    }

    return textList;
  };

  return (
    <View>
      <Svg style={{ flexDirection: "row" }}>{renderItems()}</Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  and: { flex: 1 },
});

export default CountAnd;

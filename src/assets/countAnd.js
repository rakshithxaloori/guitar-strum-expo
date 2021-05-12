import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { color } from "../constants";

const CountAnd = () => {
  const renderItems = () => {
    const textList = [];
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        textList.push(
          <Text
            key={i}
            style={styles.textStyling}
            viewBox="0 0 35 100"
            textAnchor="middle"
          >
            {(i / 2 + 1).toString()}
          </Text>
        );
      } else {
        textList.push(
          <Text
            key={i}
            style={styles.textStyling}
            viewBox="0 0 35 100"
            textAnchor="middle"
          >
            {"&"}
          </Text>
        );
      }
    }

    return textList;
  };

  return <View style={styles.listStyling}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  textStyling: {
    flex: 1,
    fontSize: 25,
    color: color.tertiary,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: color.primary,
  },
  listStyling: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CountAnd;

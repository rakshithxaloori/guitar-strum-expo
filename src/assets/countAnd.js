import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CountAnd = (props) => {
  const renderItems = () => {
    const textList = [];
    for (var i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        textList.push(
          <View key={i} style={styles.textStyling}>
            <Text
              style={styles.svgTextStyling}
              viewBox="0 0 35 100"
              textAnchor="middle"
            >
              {(i / 2 + 1).toString()}
            </Text>
          </View>
        );
      } else {
        textList.push(
          <View key={i} style={styles.textStyling}>
            <Text
              style={styles.svgTextStyling}
              viewBox="0 0 35 100"
              textAnchor="middle"
            >
              {"&"}
            </Text>
          </View>
        );
      }
    }

    return textList;
  };

  return <View style={styles.listStyling}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  svgTextStyling: {
    fontSize: 25,
    color: "#ce8529",
  },
  textStyling: {
    flex: 1,
  },
  listStyling: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default CountAnd;

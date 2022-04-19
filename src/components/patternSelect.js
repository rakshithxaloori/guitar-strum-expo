import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Svg } from "react-native-svg";

import Arrow from "../assets/arrow";
import CountAnd from "../assets/countAnd";
import { color, windowHeightRatio } from "../constants";

const TouchArrow = ({
  index,
  highlight,
  patternType,
  pattern,
  changePattern,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      style={styles.touchableArrow}
      onPress={() => {
        const newPattern = [...pattern];
        newPattern[index] = newPattern[index] === 0 ? 1 : 0;
        changePattern(newPattern);
      }}
    >
      <Svg viewBox={`-5 0 ${width} ${height}`}>
        <Arrow
          opaque={true}
          direction={
            patternType === 0 ? index % 2 === 0 : patternType % 2 === 0
          }
          highlight={highlight}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const PatternSelect = ({
  patternType,
  setPatternType,
  pattern,
  changePattern,
}) => {
  let { width, height } = Dimensions.get("window");
  width = width / 8;
  height = height / 10;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={[
            styles.arrow,
            patternType === 0
              ? { color: color.primary, backgroundColor: color.secondary }
              : {},
          ]}
          onPress={() => setPatternType(0)}
        >
          {"↑ ↓"}
        </Text>
        <Text
          style={[
            styles.arrow,
            patternType === 1
              ? { color: color.primary, backgroundColor: color.secondary }
              : {},
          ]}
          onPress={() => setPatternType(1)}
        >
          {"↑ ↑"}
        </Text>
        <Text
          style={[
            styles.arrow,
            patternType === 2
              ? { color: color.primary, backgroundColor: color.secondary }
              : {},
          ]}
          onPress={() => setPatternType(2)}
        >
          {"↓ ↓"}
        </Text>
      </View>
      <View style={[styles.touchableArrow, styles.arrows]}>
        {pattern.map((highlight, index) => (
          <TouchArrow
            key={index}
            index={index}
            highlight={highlight}
            patternType={patternType}
            pattern={pattern}
            changePattern={changePattern}
            width={width}
            height={height}
          />
        ))}
      </View>
      <CountAnd />
    </View>
  );
};

const styles = StyleSheet.create({
  touchableArrow: {
    flex: 2,
    alignItems: "center",
  },
  arrows: {
    flexDirection: "row",
  },
  arrow: {
    fontSize: 25 * windowHeightRatio,
    paddingHorizontal: 5,
    paddingBottom: 5,
    color: color.secondary,
    borderRadius: (25 * windowHeightRatio) / 2,
  },
  container: { flex: 2 },
});

export default PatternSelect;

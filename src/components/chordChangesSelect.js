import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useTranslation } from "react-i18next";

import { color, windowHeightRatio } from "../constants";

const ChordChangesSelect = ({ chordChanges, setChordChanges }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Slider
        minimumTrackTintColor={color.secondary}
        thumbTintColor={color.secondary}
        maximumTrackTintColor={color.tertiary}
        value={chordChanges}
        step={1}
        minimumValue={1}
        maximumValue={4}
        onValueChange={(value) => setChordChanges(value)}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>
          {t("components.chordchanges.changes", {
            count: chordChanges,
          })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.secondary,
    fontSize: 14 * windowHeightRatio,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    margin: 10,
  },
});

export default ChordChangesSelect;

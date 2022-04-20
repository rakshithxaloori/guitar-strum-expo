import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";

import { color, windowHeightRatio } from "../constants";

const BPMSelect = (props) => {
  const { t } = useTranslation();
  const minBPMValue = 30;
  const maxBPMValue = 240;

  return (
    <View style={styles.view}>
      <Slider
        minimumTrackTintColor={color.secondary}
        thumbTintColor={color.secondary}
        maximumTrackTintColor={color.tertiary}
        value={props.bpm}
        step={1}
        minimumValue={minBPMValue}
        maximumValue={maxBPMValue}
        onValueChange={(value) => props.setBPM(value)}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={() => {
            if (props.bpm > minBPMValue) props.setBPM(props.bpm - 1);
          }}
        >
          <AntDesign
            name="minuscircle"
            color={color.secondary}
            size={25 * windowHeightRatio}
          />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.text}>
            {t("components.bpm.value", { bpm: props.bpm })}
          </Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {props.bpm >= 220
              ? t("components.bpm.speed.light")
              : props.bpm >= 180
              ? t("components.bpm.speed.hypersonic")
              : props.bpm >= 120
              ? t("components.bpm.speed.supersonic")
              : props.bpm >= 90
              ? t("components.bpm.speed.transonic")
              : t("components.bpm.speed.subsonic")}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={() => {
            if (props.bpm < maxBPMValue) props.setBPM(props.bpm + 1);
          }}
        >
          <AntDesign
            name="pluscircle"
            color={color.secondary}
            size={25 * windowHeightRatio}
          />
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
  },
  iconTouchable: {
    paddingHorizontal: 25,
  },
  view: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
});

export default BPMSelect;

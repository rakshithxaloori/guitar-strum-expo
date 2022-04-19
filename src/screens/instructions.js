import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import AppIntroSlider from "react-native-app-intro-slider";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const InstructionsScreen = (props) => {
  const { t } = useTranslation();
  const slides = [
    {
      key: "1",
      title: t("screen.instructions.1.title"),
      text: t("screen.instructions.1.text"),
      image: require("../../assets/D.png"),
    },
    {
      key: "2",
      title: t("screen.instructions.2.title"),
      text: t("screen.instructions.2.text"),
      image: require("../../assets/metronome.png"),
    },
    {
      key: "3",
      title: t("screen.instructions.3.title"),
      text: t("screen.instructions.3.text"),
      image: require("../../assets/bar.png"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {item.image && <Image style={styles.image} source={item.image} />}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.icon}>
        <Ionicons
          name="arrow-forward-circle-outline"
          color={color.primary}
          size={45 * windowHeightRatio}
        />
      </View>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={styles.icon}>
        <Ionicons
          name="arrow-back-circle-outline"
          color={color.primary}
          size={45 * windowHeightRatio}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.icon}>
        <Ionicons
          name="checkmark-circle-outline"
          color={color.primary}
          size={45 * windowHeightRatio}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => {
        props.navigation.popToTop();
      }}
      showPrevButton={true}
      renderDoneButton={_renderDoneButton}
      renderPrevButton={_renderPrevButton}
      renderNextButton={_renderNextButton}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 2,
    color: color.primary,
    fontSize: 15 * windowHeightRatio,
  },
  title: {
    flex: 1,
    color: color.primary,
    fontSize: 25 * windowHeightRatio,
    fontWeight: "bold",
  },
  image: {
    width: 280 * windowWidthRatio,
    height: 280 * windowWidthRatio,
    marginVertical: 32,
    resizeMode: "contain",
  },
  icon: { paddingVertical: 0 },
  slide: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.secondary,
  },
});

export default InstructionsScreen;

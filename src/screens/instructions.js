import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppIntroSlider from "react-native-app-intro-slider";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const slides = [
  {
    key: "1",
    title: "Chords",
    text: "Choose atleast two chords\n\nStart with A, D or E if you are a beginner",
    image: require("../../assets/D.png"),
  },
  {
    key: "2",
    title: "BPM and Chord Changes",
    text: "BPM varies from 30 to 240 (Kage mode - Naruto reference)\n\nStart with 30/60 BPM and 1 chord change if you are a beginner",
    image: require("../../assets/metronome.png"),
  },
  {
    key: "3",
    title: "Strumming Pattern",
    text: "Choose atleast 2 strums for 1 chord change, an up or down from a set, an up or down from another",
    image: require("../../assets/bar.png"),
  },
];

const InstructionsScreen = (props) => {
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

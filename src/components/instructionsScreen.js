import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";

import { color } from "../constants";

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
    text: "BPM varies from 30 to 240 (Hypersonic mode)\n\nStart with 1 chord change if you are a beginner",
    image: require("../../assets/metronome.png"),
  },
  {
    key: "3",
    title: "Strumming Pattern",
    text: "Choose atleast 2 strums, an up or down from a set, an up or down from another, for 1 chord change",
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
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-circle-outline"
          color={color.primary}
          size={45}
        />
      </View>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-back-circle-outline"
          color={color.primary}
          size={45}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="checkmark-circle-outline" color={color.primary} size={45} />
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
    fontSize: 15,
  },
  title: {
    flex: 1,
    color: color.primary,
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    width: 280,
    height: 280,
    marginVertical: 32,
    resizeMode: "contain",
  },
  slide: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.secondary,
  },
});

export default InstructionsScreen;

import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Constants from "expo-constants";

import { color } from "../constants";

const Header = () => {
  const { textStyling, viewStyling } = styles;

  return (
    <View style={viewStyling}>
      <Text style={textStyling}>Chord Changes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 22,
  },
  viewStyling: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: color.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;

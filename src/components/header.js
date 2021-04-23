import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { textStyling, viewStyling } = styles;

  return (
    <View style={viewStyling}>
      <Text style={textStyling}>Chord Changes</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },
  viewStyling: {
    backgroundColor: "grey",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Header;

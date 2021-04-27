import React from "react";
import { View, StyleSheet, Animated } from "react-native";

import Header from "./src/components/header";
import Play from "./src/components/play";

export default function App() {
  const barConfig = [1, 1, 1, 0, 1, 0, 1, 1];
  return (
    <View style={styles.container}>
      <Header />
      <Play barConfig={barConfig} bpm={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3c4c6",
    // alignItems: "center",
  },
});

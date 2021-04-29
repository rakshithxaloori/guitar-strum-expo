import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header";
import Play from "./play";
import PrePlay from "./prePlay";

export default function Home() {
  const pattern = [1, 1, 1, 0, 1, 0, 1, 1];
  return (
    <View style={styles.container}>
      <Header />
      {/* <PrePlay /> */}
      <Play pattern={pattern} bpm={30} />
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

import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./src/components/header";
import PrePlay from "./src/components/prePlay";
import Bar from "./src/components/bar";

import Arrow from "./src/assets/upArrow";

export default function App() {
  const barConfig = [1, 1, 1, 0, 1, 0, 1, 0];
  return (
    <View>
      {/* <Header />
      <PrePlay /> */}
      <Bar
        barConfig={barConfig}
        xInit={50}
        xSep={50}
        arrowY1={50}
        arrowHeight={50}
        forkHeight={60}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

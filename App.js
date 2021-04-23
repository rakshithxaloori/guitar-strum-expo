import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import Header from "./src/components/header";
import Select from "./src/components/chordSelect";

export default function App() {
  return (
    <>
      <Header />
      <Select />
    </>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

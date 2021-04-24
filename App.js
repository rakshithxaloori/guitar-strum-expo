import React from "react";
import { StyleSheet } from "react-native";

import Header from "./src/components/header";
import ChordsSelect from "./src/components/chordSelect";

export default function App() {
  return (
    <>
      <Header />
      <ChordsSelect />
    </>
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

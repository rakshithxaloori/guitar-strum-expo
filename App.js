import React from "react";
import { StyleSheet } from "react-native";

import Header from "./src/components/header";
import PrePlay from "./src/components/prePlay";

export default function App() {
  return (
    <>
      <Header />
      <PrePlay />
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

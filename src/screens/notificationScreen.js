import React from "react";
import { View, StyleSheet } from "react-native";

const NotificationsScreen = () => {
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };
};

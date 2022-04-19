import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const RouteScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View style={styles.viewStyling}>
      <Ionicons
        name="notifications-circle-outline"
        style={{ position: "absolute", top: 20, right: 20 }}
        size={40}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
      <Text style={styles.headerTextStyling}>{t("screen.home.header")}</Text>
      <TouchableOpacity
        style={[
          styles.touchableOpacityButtonStyling,
          { backgroundColor: color.secondary },
        ]}
        onPress={() => {
          navigation.navigate("BeginnerConfig");
        }}
      >
        <Text style={styles.textStyling}>Beginner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.touchableOpacityButtonStyling,
          { backgroundColor: color.tertiary },
        ]}
        onPress={() => {
          navigation.navigate("IntermediateChords");
        }}
      >
        <Text style={styles.textStyling}>Custom</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 20 * windowHeightRatio,
    fontWeight: "bold",
    color: color.primary,
  },
  touchableOpacityButtonStyling: {
    maxHeight: 100 * windowHeightRatio,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10 * windowHeightRatio,
    margin: 5 * windowHeightRatio,
  },
  headerTextStyling: {
    color: color.secondary,
    padding: 20,
    fontWeight: "bold",
    fontSize: 40 * windowWidthRatio,
  },
  viewStyling: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.primary,
  },
});
// Next level - Jedi Master
export default RouteScreen;

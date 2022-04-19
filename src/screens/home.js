import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const RouteScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View style={styles.view}>
      <Ionicons
        name="notifications-circle-outline"
        style={{
          position: "absolute",
          top: StatusBar.currentHeight + 10,
          right: StatusBar.currentHeight,
        }}
        size={40}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
      <Text style={styles.headerText}>{t("screen.home.header")}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color.secondary }]}
        onPress={() => {
          navigation.navigate("BeginnerConfig");
        }}
      >
        <Ionicons name="person" size={TEXT_SIZE} color={color.primary} />
        <Text style={styles.text}>{t("screen.home.beginner")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color.tertiary }]}
        onPress={() => {
          navigation.navigate("CustomChords");
        }}
      >
        <FontAwesome5
          name="user-ninja"
          size={TEXT_SIZE}
          color={color.primary}
        />
        <Text style={styles.text}>{t("screen.home.custom")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TEXT_SIZE = 20 * windowHeightRatio;

const styles = StyleSheet.create({
  text: {
    fontSize: TEXT_SIZE,
    fontWeight: "bold",
    color: color.primary,
    marginLeft: 8,
  },
  button: {
    maxHeight: 100 * windowHeightRatio,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10 * windowHeightRatio,
    margin: 5 * windowHeightRatio,
  },
  headerText: {
    color: color.secondary,
    padding: 20,
    fontWeight: "bold",
    fontSize: 40 * windowWidthRatio,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: color.primary,
  },
});

export default RouteScreen;

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
import * as Linking from "expo-linking";

import {
  color,
  MAIL_ADDRESS,
  windowHeightRatio,
  windowWidthRatio,
} from "../constants";
import AdBanner from "../components/adBanner";

const RouteScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const sendMail = () => {
    Linking.openURL(`mailto: ${MAIL_ADDRESS}`);
  };

  return (
    <View style={styles.view}>
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
      <View
        style={{
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 10,
            width: "100%",
          }}
        >
          <Ionicons
            name="mail"
            style={styles.mailIcon}
            size={40}
            onPress={sendMail}
          />
          <Ionicons
            name="notifications-circle-outline"
            style={styles.bellIcon}
            size={40}
            onPress={() => {
              navigation.navigate("Notifications");
            }}
          />
        </View>
        <Text style={styles.help} onPress={sendMail}>
          {t("screen.home.help")}
        </Text>
        <AdBanner />
      </View>
    </View>
  );
};

const TEXT_SIZE = 20 * windowHeightRatio;

const styles = StyleSheet.create({
  help: { textDecorationLine: "underline", color: "#898989", margin: 5 },
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
  bellIcon: {
    // alignSelf: "flex-end",
    // position: "relative",
    // top: StatusBar.currentHeight + 10,
    // right: StatusBar.currentHeight,
  },
  mailIcon: {
    // position: "absolute",
    // bottom: StatusBar.currentHeight + 10,
    // left: StatusBar.currentHeight,
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

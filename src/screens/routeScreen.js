import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const RouteScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewStyling}>
      <IonIcon
        name="notifications-circle-outline"
        style={{ position: "absolute", top: 20, right: 20 }}
        size={40}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
      <Text style={styles.headerTextStyling}>Your Guitar Jedi rank is ...</Text>
      <TouchableOpacity
        style={[
          styles.touchableOpacityButtonStyling,
          { backgroundColor: color.secondary },
        ]}
        onPress={() => {
          navigation.navigate("BeginnerConfig");
        }}
      >
        <Text style={styles.textStyling}>Padawan</Text>
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
        <Text style={styles.textStyling}>Jedi Knight</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: color.secondary,
          alignItems: "center",
          justifyContent: "center",
          padding: 10 * windowHeightRatio,
          margin: 5 * windowHeightRatio,
          borderRadius: 15,
        }}
      >
        <EntypoIcon
          name="info-with-circle"
          color={color.primary}
          size={10 * windowHeightRatio}
        />
        <Text
          style={{
            padding: 3,
            color: color.primary,
            fontSize: 10 * windowHeightRatio,
          }}
        >
          Jedi Master rank coming soon!
        </Text>
      </View>
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

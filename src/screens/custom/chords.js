import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";

import { color, windowHeightRatio, windowWidthRatio } from "../../constants";
import AdBanner from "../../components/adBanner";

const ChordsScreen = (props) => {
  const { t } = useTranslation();
  const [chords, setChords] = useState([]);
  const [input, setInput] = useState("");

  const flashAlert = (message, big = false) => {
    showMessage({
      message: message,
      type: "info",
      icon: "auto",
      position: "bottom",
      backgroundColor: color.secondary,
      textStyle: { fontSize: 14 * windowHeightRatio },
      style: { height: big ? 60 * windowHeightRatio : 50 * windowHeightRatio },
    });
  };

  const confirmChords = () => {
    // Check if atleast one chord selected
    if (chords.length < 2) {
      flashAlert(t("screen.custom.chords.flash.min"));
      return;
    }

    props.navigation.navigate("CustomConfig", {
      chords: chords,
    });
  };

  const chooseChord = () => {
    if (input === "") {
      flashAlert(t("screen.custom.chords.flash.empty"));
      return;
    }
    // Check if chord is not already selected
    if (chords.includes(input)) {
      flashAlert(t("screen.custom.chords.flash.duplicate"));
      return;
    }
    // Maximum 6 chords select
    if (chords.length >= 6) {
      flashAlert(t("screen.custom.chords.flash.max"));
    }
    setChords([...chords, input]);
    setInput("");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>{t("screen.custom.chords.header")}</Text>

      <View style={{ margin: 10 }}>
        {chords.map((chord) => (
          <Text key={chord} style={styles.chord}>
            {chord}
          </Text>
        ))}
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(value) => {
            value.trim();
            setInput(value.replace(/\s+/g, ""));
          }}
          placeholder="Chord Name"
          maxLength={7}
        />
        <TouchableOpacity style={styles.nextBtn} onPress={chooseChord}>
          <Text style={styles.addTxt}>
            {t("screen.custom.chords.button.add")}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.nextBtn} onPress={confirmChords}>
          <Ionicons
            name="musical-note"
            color={color.primary}
            size={20 * windowHeightRatio}
          />
          <Text style={styles.nextTxt}>
            {t("screen.custom.chords.button.next")}
          </Text>
        </TouchableOpacity>

        <AdBanner />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30 * windowHeightRatio,
    color: color.secondary,
    fontWeight: "bold",
    paddingVertical: 8 * windowHeightRatio,
    paddingHorizontal: 5 * windowWidthRatio,
  },
  chord: { fontSize: 18 * windowHeightRatio },
  input: {
    flex: 1,
    margin: 5,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: color.secondary,
    borderRadius: 15,
  },
  addBtn: { flex: 1, margin: 5 },
  addTxt: {
    fontSize: 12 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  nextTxt: {
    fontSize: 20 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  nextBtn: {
    maxHeight: 100 * windowHeightRatio,
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 15 / windowHeightRatio,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: color.primary,
  },
});

export default ChordsScreen;

import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Constants from "expo-constants";

import ChordChangesSelect from "../chordChangesSelect";
import BPMSelect from "../bpmSelect";
import PatternSelect from "../patternSelect";

import { color, windowHeightRatio, windowWidthRatio } from "../../constants";
import AdBanner from "../adBanner";

class ConfigScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 60,
      pattern: [0, 0, 0, 0, 0, 0, 0, 0],
      chordChanges: 1,
      open: false,
    };
  }

  flashAlert = (message, big = false) => {
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

  confirmConfig = () => {
    // Check if atleast one strum selected
    if (this.state.pattern.indexOf(1) === -1) {
      this.flashAlert("Select atleast one strum");
      return;
    }

    let patternCount = 0;
    for (let i = 0; i < this.state.pattern.length; i += 2) {
      if (this.state.pattern[i] === 1 || this.state.pattern[i + 1] === 1)
        patternCount++;
    }

    if (patternCount < this.state.chordChanges) {
      this.flashAlert(
        `Select more strums for ${this.state.chordChanges} chord changes in a bar`,
        true
      );
      return;
    }

    this.props.navigation.navigate("Play", {
      chords: this.props.route.params.chords,
      bpm: this.state.bpm,
      pattern: this.state.pattern,
      chordChanges: this.state.chordChanges,
    });
  };

  render = () => {
    return (
      <View style={styles.screenStyling}>
        <Text style={styles.headerTextStyling}>Almost Ready!</Text>
        <ChordChangesSelect
          chordChanges={this.state.chordChanges}
          setChordChanges={(value) => {
            this.setState({ chordChanges: value });
          }}
        />
        <BPMSelect
          bpm={this.state.bpm}
          setBPM={(bpmValue) => {
            this.setState({ bpm: bpmValue });
          }}
        />
        <PatternSelect
          pattern={this.state.pattern}
          changeStrum={(index) => {
            const newPattern = [...this.state.pattern];
            newPattern[index] = newPattern[index] === 0 ? 1 : 0;
            this.setState({ pattern: newPattern });
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 15 / windowHeightRatio,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.touchableOpacityInstructionsStyling}
            onPress={() => this.props.navigation.navigate("Instructions")}
          >
            <AntDesignIcon
              name="questioncircleo"
              color={color.secondary}
              size={40 * windowHeightRatio}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButtonStyling}
            onPress={this.confirmConfig}
          >
            <IonIcon
              name="musical-note"
              color={color.primary}
              size={20 * windowHeightRatio}
            />
            <Text style={styles.textStyling}>Play</Text>
          </TouchableOpacity>
        </View>
        <FlashMessage ref="localFlashMessage" />
        <AdBanner />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  headerTextStyling: {
    color: color.secondary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 5,
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30 * windowWidthRatio,
  },
  textStyling: {
    fontSize: 20 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityInstructionsStyling: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacityButtonStyling: {
    height: 60 * windowHeightRatio,
    flex: 4,
    flexDirection: "row",
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  screenStyling: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: color.primary,
  },
});

export default ConfigScreen;

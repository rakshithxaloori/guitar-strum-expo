import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import { withTranslation } from "react-i18next";

import ChordChangesSelect from "../../components/chordChangesSelect";
import BPMSelect from "../../components/bpmSelect";
import PatternSelect from "../../components/patternSelect";

import { color, windowHeightRatio, windowWidthRatio } from "../../constants";
import AdBanner from "../../components/adBanner";

class ConfigScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 60,
      patternType: 0,
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
      patternType: this.state.patternType,
      pattern: this.state.pattern,
      chordChanges: this.state.chordChanges,
    });
  };

  render = () => {
    return (
      <View style={styles.screen}>
        <Text style={styles.headerText}>
          {this.props.t("screen.custom.config.header")}
        </Text>
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
          patternType={this.state.patternType}
          setPatternType={(type) => this.setState({ patternType: type })}
          pattern={this.state.pattern}
          changePattern={(pattern) => this.setState({ pattern })}
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
            style={styles.touchableOpacityInstructions}
            onPress={() => this.props.navigation.navigate("Instructions")}
          >
            <AntDesign
              name="questioncircleo"
              color={color.secondary}
              size={40 * windowHeightRatio}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={this.confirmConfig}
          >
            <Ionicons
              name="musical-note"
              color={color.primary}
              size={20 * windowHeightRatio}
            />
            <Text style={styles.text}>
              {this.props.t("screen.custom.config.button")}
            </Text>
          </TouchableOpacity>
        </View>
        <AdBanner />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  headerText: {
    color: color.secondary,
    paddingBottom: 5,
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30 * windowWidthRatio,
  },
  text: {
    fontSize: 20 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityInstructions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacityButton: {
    height: 60 * windowHeightRatio,
    flex: 4,
    flexDirection: "row",
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  screen: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: color.primary,
  },
});

export default withTranslation()(ConfigScreen);

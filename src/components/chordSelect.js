import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import { color } from "../constants";

const ChordsSelect = (props) => {
  return (
    <View>
      <View style={styles.viewStyling}>
        {props.chords.map((chordObj, index) => (
          <TouchableOpacity
            key={index}
            style={
              chordObj.isSelected
                ? styles.touchableOpacitySelectedStyling
                : styles.touchableOpacityNormalStyling
            }
            onPress={() => {
              props.selectChord(chordObj);
            }}
          >
            <Text
              style={
                chordObj.isSelected
                  ? styles.textSelectedStyling
                  : styles.textNormalStyling
              }
            >
              {chordObj.chordText}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const inheritStyles = StyleSheet.create({
  touchableStyling: {
    padding: 7,
    margin: 5,
    width: 75,
    borderWidth: 3,
    borderRadius: 15,
  },
  textStyling: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15,
  },
});

const styles = StyleSheet.create({
  textNormalStyling: {
    ...inheritStyles.textStyling,
    color: color.secondary,
  },
  textSelectedStyling: {
    ...inheritStyles.textStyling,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityNormalStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: color.primary,
    borderColor: color.secondary,
  },
  touchableOpacitySelectedStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: color.secondary,
    borderColor: color.secondary,
  },
  viewStyling: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ChordsSelect;

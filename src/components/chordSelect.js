import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import { color, windowHeightRatio, windowWidthRatio } from "../constants";

const ChordsSelect = (props) => {
  return (
    <View>
      <View style={styles.view}>
        {props.chords.map((chordObj, index) => (
          <TouchableOpacity
            key={index}
            style={
              chordObj.isSelected
                ? styles.touchableOpacitySelected
                : styles.touchableOpacityNormal
            }
            onPress={() => {
              props.selectChord(chordObj);
            }}
          >
            <Text
              style={
                chordObj.isSelected ? styles.textSelected : styles.textNormal
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
  touchable: {
    padding: 7,
    margin: 5,
    width: 75 * windowWidthRatio,
    borderWidth: 3 * windowWidthRatio,
    borderRadius: 15,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15 * windowHeightRatio,
  },
});

const styles = StyleSheet.create({
  textNormal: {
    ...inheritStyles.text,
    color: color.secondary,
  },
  textSelected: {
    ...inheritStyles.text,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityNormal: {
    ...inheritStyles.touchable,
    backgroundColor: color.primary,
    borderColor: color.secondary,
  },
  touchableOpacitySelected: {
    ...inheritStyles.touchable,
    backgroundColor: color.secondary,
    borderColor: color.secondary,
  },
  view: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ChordsSelect;

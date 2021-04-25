import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const ChordsSelect = (props) => {
  const {
    textStyling,
    touchableOpacityNormalStyling,
    touchableOpacitySelectedStyling,
    viewStyling,
  } = styles;

  return (
    <View>
      <View style={viewStyling}>
        {props.chords.map((chordObj, index) => (
          <TouchableOpacity
            key={index}
            style={
              chordObj.isSelected
                ? touchableOpacitySelectedStyling
                : touchableOpacityNormalStyling
            }
            onPress={() => {
              props.selectChord(chordObj);
            }}
          >
            <Text style={textStyling}>{chordObj.chordText}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const inheritStyles = {
  touchableStyling: {
    padding: 10,
    margin: 10,
    width: 75,
    borderWidth: 5,
    borderRadius: 20,
  },
};

const styles = {
  textStyling: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15,
  },

  touchableOpacityNormalStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: "gainsboro",
    borderColor: "black",
  },
  touchableOpacitySelectedStyling: {
    ...inheritStyles.touchableStyling,
    backgroundColor: "grey",
    borderColor: "red",
  },
  viewStyling: {
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

export default ChordsSelect;

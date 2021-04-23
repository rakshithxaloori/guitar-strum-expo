import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

const Select = () => {
  const { textStyling, touchableOpacityNormalStyling, viewStyling } = styles;
  const chords = ["A", "Am", "C", "D", "Dm", "E", "Em", "G"];
  const [selectedChords, setSelectedChords] = useState([]);

  return (
    <View style={viewStyling}>
      {chords.map((chord, index) => (
        <TouchableOpacity
          key={index}
          style={touchableOpacityNormalStyling}
          onPress={() => {
            console.log("------------------------------------------------");
            console.log(
              selectedChords.find((findChord) => findChord === chord)
            );
            if (selectedChords.find((findChord) => findChord === chord)) {
              console.log(chord, "FOUND");
              const index = selectedChords.indexOf(chord);
              if (index > -1) {
                selectedChords.splice(index, 1);
              }
              console.log("ALL CHORDS", selectedChords);
            } else {
              console.log(chord, "NOT FOUND");
              setSelectedChords([...selectedChords, chord]);
              console.log("ALL CHORDS", selectedChords);
            }
          }}
        >
          <Text style={textStyling}>{chord}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },
  touchableOpacityNormalStyling: {
    padding: 10,
    margin: 10,
    backgroundColor: "grey",
  },
  viewStyling: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gainsboro",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Select;

import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Accordion from "react-native-collapsible/Accordion";

import ChordSelect from "../chordSelect";

import { color, windowHeightRatio, windowWidthRatio } from "../../constants";

class IntermediateScreen extends Component {
  constructor(props) {
    super(props);

    const majorChords = {
      type: "Major",
      chords: ["E", "A", "D", "C", "G"],
    };
    const minorChords = {
      type: "Minor",
      chords: ["Em", "Am", "Dm", "Bm"],
    };
    const seventhChords = {
      type: "Seventh",
      chords: ["E7", "A7", "C7", "D7", "B7"],
    };
    const sixthChords = {
      type: "Sixth",
      chords: ["E6", "A6", "C6", "D6", "G6"],
    };
    const suspendedChords = {
      type: "Suspended",
      chords: ["Esus4", "Asus4", "Dsus4", "Csus4", "Dsus2"],
    };
    const slashChords = {
      type: "Slash",
      chords: ["Am/G", "Am/F"],
    };
    const diminishedChords = {
      type: "Diminished",
      chords: ["Ddim", "Edim", "Gdim", "Bdim", "Fdim"],
    };
    const augmentedChords = {
      type: "Augmented",
      chords: ["Eaug", "Aaug", "Daug"],
    };
    const triadChords = {
      type: "Triad",
      chords: ["F", "Fm", "Fdim", "Faug"],
    };
    const allChords = [
      majorChords,
      minorChords,
      seventhChords,
      sixthChords,
      suspendedChords,
      slashChords,
      diminishedChords,
      augmentedChords,
      triadChords,
    ];

    for (let j = 0; j < allChords.length; j++) {
      for (let i = 0; i < allChords[j].chords.length; i++) {
        allChords[j].chords[i] = {
          chordText: allChords[j].chords[i],
          isSelected: false,
        };
      }
    }

    this.state = {
      majorChords,
      minorChords,
      seventhChords,
      sixthChords,
      suspendedChords,
      slashChords,
      diminishedChords,
      augmentedChords,
      triadChords,

      displaySelectedChords: [],

      activeSections: [],
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
    const allChords = [
      this.state.majorChords,
      this.state.minorChords,
      this.state.seventhChords,
      this.state.sixthChords,
      this.state.suspendedChords,
      this.state.slashChords,
      this.state.diminishedChords,
      this.state.augmentedChords,
      this.state.triadChords,
    ];
    let finalSelectedChords = [];
    for (let i = 0; i < allChords.length; i++) {
      if (allChords[i].isSelected) {
        finalSelectedChords.push(allChords[i].chordText);
      }
    }

    // Check if atleast one chord selected
    if (finalSelectedChords.length < 2) {
      this.flashAlert("Select atleast two chords");
      return;
    }

    this.props.navigation.navigate("Play", {
      chords: finalSelectedChords,
    });
  };

  selectChord = (chordObj, setStateFunc, chordState) => {
    if (this.state.displaySelectedChords.length >= 6) {
      this.flashAlert("Choose atmost 6 chords only");
      return;
    } else {
      if (this.state.displaySelectedChords.length < 2) {
        this.flashAlert("Choose atleast 2 chords");
        return;
      }
    }
    let newChordsState = [...chordState.chords];
    let chordIndex = chordState.chords.findIndex(
      (findChord) => findChord === chordObj
    );
    let newSelectedChord = {
      ...newChordsState[chordIndex],
    };
    newSelectedChord.isSelected = !newSelectedChord.isSelected;
    if (newSelectedChord.isSelected) {
      // Selecting
      this.setState((prevState) => {
        const displaySelectedChords = [
          ...prevState.displaySelectedChords,
          newSelectedChord.chordText,
        ];

        return {
          displaySelectedChords,
        };
      });
    } else {
      // Unselecting
      this.setState((prevState) => {
        let displaySelectedChords = [...prevState.displaySelectedChords];
        const index = displaySelectedChords.indexOf(newSelectedChord.chordText);
        if (index !== -1) {
          displaySelectedChords.splice(index, 1);
          return {
            displaySelectedChords,
          };
        }
      });
    }
    newChordsState[chordIndex] = newSelectedChord;
    setStateFunc(newChordsState);
  };

  generateSections = () => [
    {
      title: this.state.majorChords.type,
      component: (
        <ChordSelect
          chords={this.state.majorChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  majorChords: {
                    type: this.state.majorChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.majorChords
            )
          }
        />
      ),
    },
    {
      title: this.state.minorChords.type,
      component: (
        <ChordSelect
          chords={this.state.minorChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  minorChords: {
                    type: this.state.minorChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.minorChords
            )
          }
        />
      ),
    },
    {
      title: this.state.seventhChords.type,
      component: (
        <ChordSelect
          chords={this.state.seventhChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  seventhChords: {
                    type: this.state.seventhChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.seventhChords
            )
          }
        />
      ),
    },
    {
      title: this.state.sixthChords.type,
      component: (
        <ChordSelect
          chords={this.state.sixthChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  sixthChords: {
                    type: this.state.sixthChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.sixthChords
            )
          }
        />
      ),
    },
    {
      title: this.state.suspendedChords.type,
      component: (
        <ChordSelect
          chords={this.state.suspendedChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  suspendedChords: {
                    type: this.state.suspendedChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.suspendedChords
            )
          }
        />
      ),
    },
    {
      title: this.state.slashChords.type,
      component: (
        <ChordSelect
          chords={this.state.slashChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  slashChords: {
                    type: this.state.slashChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.slashChords
            )
          }
        />
      ),
    },
    {
      title: this.state.diminishedChords.type,
      component: (
        <ChordSelect
          chords={this.state.diminishedChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  diminishedChords: {
                    type: this.state.diminishedChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.diminishedChords
            )
          }
        />
      ),
    },
    {
      title: this.state.augmentedChords.type,
      component: (
        <ChordSelect
          chords={this.state.augmentedChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  augmentedChords: {
                    type: this.state.augmentedChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.augmentedChords
            )
          }
        />
      ),
    },
    {
      title: this.state.triadChords.type,
      component: (
        <ChordSelect
          chords={this.state.triadChords.chords}
          selectChord={(chordObj) =>
            this.selectChord(
              chordObj,
              (newChordsState) =>
                this.setState({
                  triadChords: {
                    type: this.state.triadChords.type,
                    chords: newChordsState,
                  },
                }),
              this.state.triadChords
            )
          }
        />
      ),
    },
  ];

  _renderHeader = (section) => {
    return (
      <View style={styles.headerAccordion}>
        <MaterialCommunityIcons
          name="music-circle-outline"
          color={color.primary}
          size={20 * windowHeightRatio}
        />
        <Text style={styles.headerTextAccordion}>
          {section.title + " Chords"}
        </Text>
      </View>
    );
  };

  _renderContent = (section) => {
    return <View style={styles.componentAccordion}>{section.component}</View>;
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  _keyExtractor = (item) => {
    return item.title;
  };

  render = () => {
    return (
      <View style={styles.screenStyling}>
        <View style={styles.headerStyling}>
          <MaterialCommunityIcons
            name="playlist-music"
            color={color.secondary}
            size={40 * windowHeightRatio}
          />
          <Text style={styles.headerTextStyling}>Pick Chords</Text>
        </View>
        {this.state.displaySelectedChords.length > 0 && (
          <View style={styles.selectedChordsViewStyling}>
            {this.state.displaySelectedChords.map((selectedChord) => (
              <Text
                key={selectedChord}
                style={styles.selectedChordsTextStyling}
              >
                {selectedChord}
              </Text>
            ))}
          </View>
        )}
        <Accordion
          containerStyle={{ flex: 1 }}
          touchableComponent={TouchableOpacity}
          sections={this.generateSections()}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          keyExtractor={this._keyExtractor}
          renderAsFlatList
        />
        <TouchableOpacity
          style={styles.touchableOpacityButtonStyling}
          onPress={this.confirmConfig}
        >
          <IonIcon
            name="musical-note"
            color={color.primary}
            size={20 * windowHeightRatio}
          />
          <Text style={styles.textStyling}>Next</Text>
        </TouchableOpacity>
        <FlashMessage ref="localFlashMessage" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 20 * windowHeightRatio,
    paddingHorizontal: 5,
    color: color.primary,
    fontWeight: "bold",
  },
  touchableOpacityButtonStyling: {
    maxHeight: 100 * windowHeightRatio,
    // flex: 1,
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 15 / windowHeightRatio,
    marginHorizontal: 10,
    backgroundColor: color.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  headerTextStyling: {
    color: color.secondary,
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 40 * windowWidthRatio,
  },
  headerStyling: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectedChordsTextStyling: {
    color: color.tertiary,
    padding: 2,
    fontSize: 15 * windowHeightRatio,
    fontWeight: "bold",
  },
  selectedChordsViewStyling: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.secondary,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 8 * windowHeightRatio,
  },
  headerTextAccordion: {
    fontSize: 15 * windowHeightRatio,
    color: color.primary,
    fontWeight: "bold",
    paddingVertical: 8 * windowHeightRatio,
    paddingHorizontal: 5 * windowWidthRatio,
  },
  headerAccordion: {
    alignItems: "center",
    backgroundColor: color.secondary,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  screenStyling: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: color.primary,
  },
});

export default IntermediateScreen;

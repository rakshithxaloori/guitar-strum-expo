import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { color } from "../constants";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      funFacts: [
        "The First Guitar was Created in Ancient Egypt!",
        "Guitars were always constructed with hollow bodies, until electric guitars came and made that design choice obsolete!",
        "During middle ages, guitars were used almost exclusively as rhythm instruments!",
        "Electric guitars have electromagnetic pickups that convert string vibrations into electrical signals!",
        "The Shortest Guitar is Just 10 Microns, smaller than the with of your hair!",
      ],
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.hideSplashScreen();
    }, 3000);
  };

  hideSplashScreen = () => {
    this.props.navigation.navigate("Config");
  };

  render = () => {
    return (
      <View style={styles.mainContainerStyling}>
        <View style={styles.rootViewStyling}>
          <View style={[styles.childViewStyling, { flex: 3 }]}>
            <Image
              source={require("../../assets/guitar-icon.png")}
              style={{ width: "120%", resizeMode: "contain" }}
            />
          </View>
          <View style={[styles.childViewStyling, { flex: 1 }]}>
            <Text style={styles.textStyling}>
              {/* {
                this.state.funFacts[
                  Math.floor(Math.random() * this.state.funFacts.length)
                ]
              } */}
              {this.state.funFacts[1]}
            </Text>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  mainContainerStyling: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  rootViewStyling: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  childViewStyling: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.tertiary,
    flex: 1,
    paddingHorizontal: 10,
  },
  textStyling: {
    textAlign: "center",
    color: color.primary,
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default SplashScreen;

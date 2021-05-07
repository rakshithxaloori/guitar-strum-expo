import React, { Component } from "react";
import { View, Button, Dimensions } from "react-native";

import PatternSelect from "./patternSelect";

class SecondClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  confirmConfig = () => {
    // Check atleast one 1 in pattern

    this.props.navigation.navigate("Play", {
      pattern: this.state.pattern,
      ...this.props.navigation.state.params,
    });
  };

  render = () => {
    return (
      <View>
        <PatternSelect
          xInit={25}
          xSep={(Dimensions.get("window").width - 2 * 25) / 7}
          y={20}
          arrowLineHeight={50}
          pattern={this.state.pattern}
          changeStrum={(index) => {
            const newPattern = [...this.state.pattern];
            newPattern[index] = newPattern[index] === 0 ? 1 : 0;
            this.setState({ pattern: newPattern });
          }}
        />

        <Button title="Press me?" onPress={this.confirmConfig} />
      </View>
    );
  };
}

export default SecondClass;

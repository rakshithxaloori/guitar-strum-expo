import React, { Component } from "react";
import { View, Button, Text } from "react-native";

import PatternSelect from "./patternSelect";

class SecondClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: [0, 0, 0, 0, 0, 0, 0, 0],
      chordChanges: null,
      open: false,
    };
  }

  confirmConfig = () => {
    // Check atleast one 1 in pattern

    this.props.navigation.navigate("Play", {
      pattern: this.state.pattern,
      chordChanges: this.state.chordChanges,
      ...this.props.navigation.state.params,
    });
  };

  render = () => {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <PatternSelect
          pattern={this.state.pattern}
          changeStrum={(index) => {
            const newPattern = [...this.state.pattern];
            newPattern[index] = newPattern[index] === 0 ? 1 : 0;
            this.setState({ pattern: newPattern });
          }}
        />
        <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
          <Text>#Chord Changes in a Bar</Text>
          {/* <DropDownPicker
            searchable={false}
            placeholder="Select #chord changes"
            items={[
              { label: "4", value: 4 },
              { label: "3", value: 3 },
              { label: "2", value: 2 },
              { label: "1", value: 1 },
            ]}
            setItems={(item) => {
              console.log(item);
            }}
            value={this.state.chordChanges}
            setValue={(value) => {
              console.log(value);
              this.setState({ chordChanges: value });
            }}
            open={this.state.open}
            setOpen={() =>
              this.setState((prevState) => ({ open: !prevState.open }))
            }
          /> */}
        </View>
        <Button title="Press me?" onPress={this.confirmConfig} />
      </View>
    );
  };
}

export default SecondClass;

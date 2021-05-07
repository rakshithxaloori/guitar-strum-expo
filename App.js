import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FirstScreenScreen from "./src/components/firstScreen";
import SecondScreenScreen from "./src/components/secondScreen";
import PlayScreen from "./src/components/play";
import Test from "./src/components/test";

const navigator = createStackNavigator(
  {
    Chords: FirstScreenScreen,
    StrummingPattern: SecondScreenScreen,
    Play: PlayScreen,
    Test: Test,
  },
  {
    initialRouteName: "Chords",
  }
);

export default createAppContainer(navigator);

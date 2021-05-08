import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FirstScreenScreen from "./src/components/firstScreen";
import SecondScreenScreen from "./src/components/secondScreen";
import PlayScreen from "./src/components/play";

const navigator = createStackNavigator(
  {
    Chords: FirstScreenScreen,
    StrummingPattern: SecondScreenScreen,
    Play: PlayScreen,
  },
  {
    initialRouteName: "Chords",
  }
);

export default createAppContainer(navigator);

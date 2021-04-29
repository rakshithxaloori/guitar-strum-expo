import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PrePlayScreen from "./src/components/prePlay";
import PlayScreen from "./src/components/play";

const navigator = createStackNavigator(
  {
    PrePlay: PrePlayScreen,
    Play: PlayScreen,
  },
  {
    initialRouteName: "PrePlay",
    defaultNavigationOptions: {
      title: "Chord Changes",
    },
  }
);

export default createAppContainer(navigator);

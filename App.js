import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ConfigScreen from "./src/components/firstScreen";
import PlayScreen from "./src/components/play";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Config"
          component={ConfigScreen}
          options={{ title: "Chord Change Practise" }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ title: "Play" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

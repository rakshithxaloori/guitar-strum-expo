import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/components/splashScreen";
import ConfigScreen from "./src/components/firstScreen";
import PlayScreen from "./src/components/play";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: "Splash", headerShown: false }}
        />
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

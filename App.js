import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Config"
          component={ConfigScreen}
          options={{
            title: "",
            headerStyle: { height: Constants.statusBarHeight },
          }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{
            title: "",
            headerStyle: { height: Constants.statusBarHeight },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

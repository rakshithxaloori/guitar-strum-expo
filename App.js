import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

import SplashScreen from "./src/components/splashScreen";
import PlayScreen from "./src/components/playScreen";
import InstructionsScreen from "./src/components/instructionsScreen";

import RouteScreen from "./src/components/routeScreen";

import BeginnerScreen from "./src/components/beginner/beginnerScreen";

import IntermediateChordsScreen from "./src/components/intermediate/chordsScreen";
import IntermediateConfigScreen from "./src/components/intermediate/configScreen";

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
          name="Route"
          component={RouteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BeginnerConfig"
          component={BeginnerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntermediateChords"
          component={IntermediateChordsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntermediateConfig"
          component={IntermediateConfigScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instructions"
          component={InstructionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//       title: "She misses you! 🎸",
//       body: "Pick her up, practise and maybe have some good time? 🎶"

export default App;

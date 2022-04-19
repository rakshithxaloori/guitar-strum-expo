import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/screens/splash";
import PlayScreen from "./src/screens/play";
import InstructionsScreen from "./src/screens/instructions";
import NotificationsScreen from "./src/screens/notification";

import HomeScreen from "./src/screens/home";

import BeginnerScreen from "./src/screens/beginner";

import IntermediateChordsScreen from "./src/screens/intermediate/chordsScreen";
import IntermediateConfigScreen from "./src/screens/intermediate/configScreen";
import { checkNotification } from "./src/utils";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    checkNotification();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Route"
          component={HomeScreen}
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
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

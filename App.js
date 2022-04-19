import "./i18n";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import PlayScreen from "./src/screens/play";
import InstructionsScreen from "./src/screens/instructions";
import NotificationsScreen from "./src/screens/notification";

import HomeScreen from "./src/screens/home";

import BeginnerScreen from "./src/screens/beginner";

import ChordsScreen from "./src/screens/custom/chords";
import ConfigScreen from "./src/screens/custom/config";
import { checkNotification } from "./src/utils";
import { color } from "./src/constants";
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    checkNotification();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="CustomChords"
          component={ChordsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomConfig"
          component={ConfigScreen}
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
      <StatusBar backgroundColor={color.primary} />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default App;

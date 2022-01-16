import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import * as SecureStorage from "expo-secure-store";

import SplashScreen from "./src/screens/splashScreen";
import PlayScreen from "./src/screens/playScreen";
import InstructionsScreen from "./src/screens/instructionsScreen";
import NotificationsScreen from "./src/screens/notificationScreen";

import RouteScreen from "./src/screens/routeScreen";

import BeginnerScreen from "./src/screens/beginnerScreen";

import IntermediateChordsScreen from "./src/screens/intermediate/chordsScreen";
import IntermediateConfigScreen from "./src/screens/intermediate/configScreen";
import {
  registerForPushNotificationsAsync,
  setNotification,
  STORAGE_TIME_STR,
} from "./src/utils";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  React.useEffect(() => {
    const regToken = async () => {
      await registerForPushNotificationsAsync();
      const getTime = await SecureStorage.getItemAsync(STORAGE_TIME_STR);
      if (getTime === null) {
        let date = new Date();
        date.setHours(18);
        date.setMinutes(0);
        await setNotification(date);
      }
    };

    regToken();
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

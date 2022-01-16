import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";

import SplashScreen from "./src/screens/splashScreen";
import PlayScreen from "./src/screens/playScreen";
import InstructionsScreen from "./src/screens/instructionsScreen";
import NotificationsScreen from "./src/screens/notificationScreen";

import RouteScreen from "./src/screens/routeScreen";

import BeginnerScreen from "./src/screens/beginnerScreen";

import IntermediateChordsScreen from "./src/screens/intermediate/chordsScreen";
import IntermediateConfigScreen from "./src/screens/intermediate/configScreen";
import { registerForPushNotificationsAsync } from "./src/utils";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log(token));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Notification received!");
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification response");
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
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

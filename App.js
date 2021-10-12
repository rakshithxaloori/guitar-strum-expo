import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

import SplashScreen from "./src/components/splashScreen";
import ConfigScreen from "./src/components/configScreen";
import PlayScreen from "./src/components/playScreen";
import InstructionsScreen from "./src/components/instructionsScreen";

const Stack = createStackNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    if (!Device.isDevice) return;

    registerForPushNotificationsAsync().then((token) => {
      // setExpoPushToken(token);
      console.log(token);
    });

    Notifications.cancelAllScheduledNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // setNotification(notification);
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    (async () => {
      await schedulePushNotification();
    })();

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
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Instructions"
          component={InstructionsScreen}
          options={{
            title: "",
            headerStyle: { height: Constants.statusBarHeight },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "She misses you! 🎸",
      body: "Pick her up, practise and maybe have some good time? 🎶",
    },
    // trigger: { seconds: 5, repeats: true },
    // Below seconds value, inefficient?
    trigger: { seconds: 172800, repeats: true },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default App;

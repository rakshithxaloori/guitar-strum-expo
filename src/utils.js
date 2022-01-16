import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

// Dev & Test
// export const bannerId = "ca-app-pub-3940256099942544/6300978111"; // Test ID, Replace with your-admob-unit-id

// Prod
// export const bannerId = "ca-app-pub-8538556251087145/7102435793";

export const bannerId = process.env.BANNER_ID;

export async function schedulePushNotification(trigger) {
  const response = await Notifications.scheduleNotificationAsync({
    content: {
      title: "It misses you! 🎸",
      body: "Pick it up, practise and maybe have some good time? 🎶",
    },
    trigger: trigger,
  });
  console.log(response);
}

export async function registerForPushNotificationsAsync() {
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

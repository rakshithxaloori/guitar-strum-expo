import { Platform, Alert } from "react-native";
import * as SecureStorage from "expo-secure-store";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

export const bannerId = process.env.BANNER_ID;

export const STORAGE_TIME_STR = "time";

async function _schedulePushNotification(trigger) {
  const response = await Notifications.scheduleNotificationAsync({
    content: {
      title: "It misses you! 🎸",
      body: "Pick it up, practise and maybe have some good time? 🎶",
    },
    trigger: trigger,
  });
  console.log(response);
}

export const setNotification = async (timestamp) => {
  await SecureStorage.setItemAsync(STORAGE_TIME_STR, timestamp.toString());
  await Notifications.cancelAllScheduledNotificationsAsync();

  await _schedulePushNotification({
    hour: timestamp.getHours(),
    minute: timestamp.getMinutes(),
    type: "daily",
  });
};

export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      experienceId: `rakshith.aloori/${Constants.manifest.slug}`,
    });
    token = token.data;
  } else {
    Alert.alert("Must use physical device for Push Notifications");
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

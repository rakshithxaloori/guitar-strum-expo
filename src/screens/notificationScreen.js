import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as SecureStorage from "expo-secure-store";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import IonIcon from "react-native-vector-icons/Ionicons";

import { color } from "../constants";

const STORAGE_TIME_STR = "time";

const prettyTime = (time) => {
  let timeStr = "";
  const hours = time.getHours();
  const minutes = time.getMinutes();

  if (hours === 0) timeStr = "12";
  else timeStr = `${hours > 12 ? hours - 12 : hours}`;

  if (minutes < 10) timeStr += `:0${minutes}`;
  else timeStr += `:${minutes}`;

  if (hours >= 12) timeStr += " PM";
  else timeStr += " AM";

  return timeStr;
};

const NotificationsScreen = () => {
  const date = new Date();
  const [show, setShow] = React.useState(false);
  const [time, setTime] = React.useState(date);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    const setTimeFromStorage = async () => {
      const getTime = await SecureStorage.getItemAsync(STORAGE_TIME_STR);
      if (getTime !== null) {
        const savedTime = new Date(getTime);
        setTime(savedTime);
      }
    };

    setTimeFromStorage();
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

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

  const onChange = async (response, timestamp) => {
    if (response.type === "set") {
      setTime(timestamp);
      await SecureStorage.setItemAsync(STORAGE_TIME_STR, timestamp.toString());
      await setNotification();
    }
    setShow(false);
  };

  const setNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await schedulePushNotification(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Set a time and we'll remind you to practise!
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Guitar practise everyday at </Text>
        <Text style={{ textDecorationLine: "underline" }}>
          {prettyTime(time)}
        </Text>
        <IonIcon
          name="alarm-outline"
          style={{ paddingLeft: 5 }}
          size={17}
          color={color.secondary}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShow(true);
        }}
      >
        <IonIcon
          name="alarm-outline"
          style={{ paddingRight: 5 }}
          size={22}
          color={color.primary}
        />
        <Text style={styles.btnText}>Set Time</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: { color: color.secondary, fontSize: 20, fontWeight: "bold" },
  button: {
    backgroundColor: color.secondary,
    padding: 15,
    borderRadius: 30,
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { color: color.primary, fontWeight: "bold", fontSize: 20 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
    padding: 10,
  },
});

export default NotificationsScreen;

async function schedulePushNotification(trigger) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "It misses you! 🎸",
      body: "Pick it up, practise and maybe have some good time? 🎶",
    },
    trigger: trigger,
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

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as SecureStorage from "expo-secure-store";

import { color } from "../constants";

const STORAGE_TIME_STR = "time";

const prettyTime = (time) => {
  let timeStr = "";
  const hours = time.getHours();
  const minutes = time.getMinutes();
  if (hours < 10) timeStr = `0${hours}`;
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

  React.useEffect(() => {
    const setTimeFromStorage = async () => {
      const timeAvailable = await SecureStorage.isAvailableAsync(
        STORAGE_TIME_STR
      );
      if (timeAvailable === true) {
        const getTime = await SecureStorage.getItemAsync(STORAGE_TIME_STR);
        setTime(getTime);
      }
    };

    setTimeFromStorage();
  }, []);

  const onChange = async (response, timestamp) => {
    if ((response.type = "set")) {
      console.log(typeof timestamp.toString());
      setTime(timestamp);
      await SecureStorage.setItemAsync(STORAGE_TIME_STR, timestamp.toString());
    } else {
    }
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Set a time and we'll remind you to practise!
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", paddingTop: 20 }}>
        <Text>Guitar practise everyday at </Text>
        <Text style={{ textDecorationLine: "underline" }}>
          {prettyTime(time)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShow(true);
        }}
      >
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

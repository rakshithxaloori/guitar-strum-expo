import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import { color } from "../constants";
import { checkNotification, setNotification } from "../utils";

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

  React.useEffect(() => {
    checkNotification();
  }, []);

  const onChange = async (response, timestamp) => {
    if (response.type === "set") {
      setTime(timestamp);
      await setNotification(timestamp);
    }
    setShow(false);
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
        <Ionicons
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
        <Ionicons
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

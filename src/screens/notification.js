import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import { color } from "../constants";
import { checkNotification, setNotification } from "../utils";

const NotificationsScreen = () => {
  const { t } = useTranslation();
  const date = new Date();
  const [show, setShow] = React.useState(false);
  const [time, setTime] = React.useState(date);

  React.useEffect(() => {
    const getNotifTime = async () => {
      const notifTime = await checkNotification();
      setTime(notifTime);
    };

    getNotifTime();
  }, []);

  const onChange = async (response, timestamp) => {
    if (response.type === "set") {
      setTime(timestamp);
      await setNotification(timestamp);
    }
    setShow(false);
  };

  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("screen.notification.title")}</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textDecorationLine: "underline" }}>
          {t("screen.notification.time", {
            notiftime: new Date(
              time.getTime() - time.getTimezoneOffset() * 60000
            ),
            formatParams: {
              notiftime: {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
            },
          })}
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
        <Text style={styles.btnText}>{t("screen.notification.button")}</Text>
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

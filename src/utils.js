import * as Notifications from "expo-notifications";
import { t } from "i18next";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const bannerId = process.env.BANNER_ID;

async function _schedulePushNotification(timestamp) {
  const response = await Notifications.scheduleNotificationAsync({
    content: {
      title: t("utils.notification.title"),
      body: t("utils.notification.body"),
    },
    trigger: {
      hour: timestamp.getHours(),
      minute: timestamp.getMinutes(),
      repeats: true,
    },
  });
  console.log("Notification scheduled", timestamp, response);
}

export const setNotification = async (timestamp = new Date()) => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await _schedulePushNotification(timestamp);
};

export const checkNotification = async () => {
  const notifs = await Notifications.getAllScheduledNotificationsAsync();

  const date = new Date();
  if (notifs.length !== 1) {
    await setNotification(date);
  } else {
    const notif = notifs[0];
    date.setHours(notif.trigger.hour);
    date.setMinutes(notif.trigger.minute);
  }
  return date;
};

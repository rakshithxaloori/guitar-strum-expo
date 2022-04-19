import * as Notifications from "expo-notifications";

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
      title: "It misses you! 🎸",
      body: "Pick it up, practise and maybe have some good time? 🎶",
    },
    trigger: {
      hour: timestamp.getHours(),
      minute: timestamp.getMinutes(),
      repeats: true,
    },
  });
  console.log("Notification scheduled", response);
}

export const setNotification = async (timestamp = new Date()) => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await _schedulePushNotification(timestamp);
};

export const checkNotification = async () => {
  const notifs = await Notifications.getAllScheduledNotificationsAsync();
  if (notifs.length !== 1) setNotification();
};

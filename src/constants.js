import { Dimensions } from "react-native";

const palatte_one = {
  primary: "#ffffff", // white
  secondary: "#2d3142", // black
  tertiary: "#ef8354", // orange
};

const palatte_two = {
  primary: "#faf2da",
  secondary: "#4a503d",
  tertiary: "#8e9775",
};

const palatte_three = {
  primary: "#faf2da",
  secondary: "#2d3142", // black
  tertiary: "#ef8354", // orange
};

export const color = { ...palatte_three };

export const windowWidthRatio = Dimensions.get("window").width / 360;
export const windowHeightRatio = Dimensions.get("window").height / 640;

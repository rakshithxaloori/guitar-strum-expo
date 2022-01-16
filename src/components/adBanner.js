import React from "react";
import { AdMobBanner } from "expo-ads-admob";

import { bannerId } from "../utils";

const bannerError = (error) => {
  console.log(error);
};
console.log(bannerId);

const AdBanner = () => (
  <AdMobBanner
    bannerSize="fullBanner"
    adUnitID={bannerId}
    servePersonalizedAds={true} // true or false
    onDidFailToReceiveAdWithError={bannerError}
  />
);

export default AdBanner;

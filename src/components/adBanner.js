import React from "react";
import { AdMobBanner } from "expo-ads-admob";

import { bannerId } from "../utils";

const bannerError = (error) => {
  console.log(error);
};

const AdBanner = () => (
  <AdMobBanner
    bannerSize="fullBanner"
    adUnitID={bannerId}
    servePersonalizedAds={false} // true or false
    onDidFailToReceiveAdWithError={bannerError}
  />
);

export default AdBanner;

import React from "react";
import * as Font from "expo-font";
import { LogBox } from "react-native";

import Navigation from "./src/navigation";

LogBox.ignoreAllLogs();

const getFonts = () => {
  return Font.loadAsync({});
};

export default function App() {
  // const scheme = useColorScheme();
  // const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    getFonts();
  }, []);

  // React.useEffect(() => {
  //   StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
  //   if (isAndroid) {
  //     StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  //     StatusBar.setTranslucent(true);
  //   }

  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 750);
  // }, [scheme, isDarkMode]);

  return (
    <>
      <Navigation />
    </>
  );
}

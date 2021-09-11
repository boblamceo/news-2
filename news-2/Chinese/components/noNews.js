import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
const NoNews = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      TimesNewRoman: require("../../assets/TimesNew.otf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>对不起，今天没有新闻!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FFCCCC",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "#cc0000",
    borderBottomWidth: 2,
    marginTop: 10,
  },
  text: {
    fontFamily: "TimesNewRoman",
    fontSize: 20,
  },
});

export default NoNews;

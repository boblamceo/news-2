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
      <Text style={styles.text}>No News Today!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#90ee90",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#3b5d17",
    borderBottomWidth: 2,
    borderBottomColor: "#3b5d17",
    marginTop: 10,
  },
  text: {
    fontFamily: "TimesNewRoman",
    fontSize: 20,
  },
});

export default NoNews;

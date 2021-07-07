import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import * as Font from "expo-font";

const Header = ({ goBack, func }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({ TimesNewRoman: require("../assets/TimesNew.otf") });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  if (goBack) {
    return (
      <View style={[styles.header, styles.row]}>
        <View style={[styles.stuff, styles.row]}>
          <IconButton
            icon="keyboard-backspace"
            size={30}
            onPress={func}
            style={styles.btn}
          ></IconButton>
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.header, styles.row]}>
      <View style={[styles.stuff, styles.row, { justifyContent: "center" }]}>
        <Text style={styles.title}>The News App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#43D26C",
    width: "100%",
    height: 80,
    alignItems: "center",
  },
  stuff: {
    width: "100%",
    marginTop: 30,
    padding: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    fontFamily: "TimesNewRoman",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Header;

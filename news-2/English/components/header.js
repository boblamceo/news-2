import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import * as Font from "expo-font";

const Header = ({ goBack, func, navigation }) => {
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
  if (goBack) {
    return (
      <View style={[styles.header, styles.row]}>
        <View style={[styles.stuff, styles.row]}>
          <IconButton
            icon="keyboard-backspace"
            size={30}
            onPress={func}
            style={styles.btn}
            animated={true}
          ></IconButton>
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.header, styles.row]}>
      <View style={[styles.stuff, styles.row, { justifyContent: "center" }]}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="menu"
            size={30}
            onPress={() => navigation.toggleDrawer()}
          ></IconButton>
        </View>

        <View
          style={{
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>BZ News</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#43D26C",
    width: "100%",
    height: "11%",
    alignItems: "center",
  },
  stuff: {
    width: "100%",
    marginTop: 30,
    padding: 5,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    fontFamily: "TimesNewRoman",
    fontWeight: "bold",
  },
});

export default Header;

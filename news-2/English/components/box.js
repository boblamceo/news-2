import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { stickerStyles } from "./sticker";

const Box = ({ color, icon, label, value, sticker }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      VRound: require("../../assets/VarelaRound-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.box, { backgroundColor: color, shadowColor: color }]}>
      <Text style={{ fontFamily: "VRound", fontSize: 20, color: "#fff" }}>
        {icon}&nbsp;
        {label}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
      >
        <Text style={{ fontFamily: "VRound", fontSize: 17, color: "#fff" }}>
          {value}{" "}
        </Text>
        {sticker !== "none" ? (
          <View style={[stickerStyles.redSticker]}>
            <Text style={{ color: "#fff", fontSize: 8 }}>+{sticker}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
});

export default Box;

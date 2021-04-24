import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./header";
import * as Font from "expo-font";
import axios from "axios";

const Covid = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const loadFonts = async () => {
    await Font.loadAsync({ Varela: require("../assets/varela.ttf") });
    setFontsLoaded(true);
  };
  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v3/covid-19/countries").then((res) => {
      setData(res);
    });
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  console.log(data.data);
  return (
    <View style={styles.container}>
      <Header goBack={false}></Header>
      <Text style={styles.text}>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontFamily: "Varela",
    fontSize: 50,
  },
});

export default Covid;

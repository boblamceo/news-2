import React from "react";
import { Button } from "react-native-paper";
import { ImageBackground } from "react-native";
import globe from "./assets/globe.gif";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={globe}
      resizeMode="cover"
      style={{ justifyContent: "center", flex: 1 }}
    >
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("English")}
        labelStyle={{ color: "black", fontSize: 15 }}
        style={{ marginBottom: 10, backgroundColor: "white" }}
      >
        🇬🇧 English
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Chinese")}
        labelStyle={{ color: "black", fontSize: 15 }}
        style={{ backgroundColor: "white" }}
      >
        🇨🇳 中文
      </Button>
    </ImageBackground>
  );
};

export default Home;

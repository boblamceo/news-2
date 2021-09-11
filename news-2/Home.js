import React from "react";
import { Button } from "react-native-paper";
import { View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("English")}
        labelStyle={{ color: "black" }}
        style={{ marginBottom: 10 }}
      >
        🇬🇧 English
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Chinese")}
        labelStyle={{ color: "black" }}
      >
        🇨🇳 中文
      </Button>
    </View>
  );
};

export default Home;

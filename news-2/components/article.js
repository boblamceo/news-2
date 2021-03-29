import React from "react";
import { Text, View } from "react-native";
import Header from "./header";

const Article = ({ navigation }) => {
  return (
    <View>
      <Header goBack={true} func={() => navigation.navigate("Home")}></Header>
      <Text>SUCCESSSSSSSSSSSSSSSS</Text>
    </View>
  );
};

export default Article;

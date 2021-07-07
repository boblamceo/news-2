import React from "react";
import { View, Text } from "react-native";
import Header from "./header";

const covidCountry = ({ navigation }) => {
  return (
    <View>
      <Header goBack func={() => navigation.navigate("Covid-19")}></Header>
      <Text>hi</Text>
    </View>
  );
};

export default covidCountry;

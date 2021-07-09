import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./header";
import Map from "./map";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const covidCountry = ({ route, navigation }) => {
  const {
    country,
    flag,
    deaths,
    recovered,
    todayCases,
    active,
    tests,
    lat,
    long,
  } = route.params;

  return (
    <View style={{ height: "100%" }}>
      <Header goBack func={() => navigation.navigate("Covid-19")}></Header>
      <Map
        lat={lat}
        long={long}
        flag={flag}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "red",
          height: 200,
          width: 200,
        }}
      />
    </View>
  );
};

export default covidCountry;

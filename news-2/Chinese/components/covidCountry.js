import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "./header";
import Map from "./map";
import * as Font from "expo-font";
import Box from "./box";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Covid from "../../assets/covid.jpeg";

const covidCountry = ({ route, navigation }) => {
  const {
    country,
    todayCases,
    deaths,
    recovered,
    active,
    lat,
    long,
    todayDeaths,
    todayRecovered,
    tests,
  } = route.params;
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
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Header goBack func={() => navigation.navigate("Covid-19")}></Header>
      <Map
        lat={lat}
        long={long}
        data={{ country, active, recovered, deaths, todayCases, todayDeaths }}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "red",
          height: 700,
          width: 200,
        }}
      />
      <ImageBackground source={Covid} resizeMode="cover" style={{ flex: 1 }}>
        <Text></Text>
        <Text style={styles.title}>{country}</Text>
        <View style={{ height: 200 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box
              color={"#d90000"}
              label={"案例"}
              value={active}
              icon={<Ionicons name="people" size={24} color="white" />}
              sticker={todayCases}
            ></Box>
            <Box
              color={"#000"}
              label={"死亡"}
              value={deaths}
              icon={<Ionicons name="ios-skull" size={24} color="white" />}
              sticker={todayDeaths}
            ></Box>
            <Box
              color={"#249225"}
              label={"恢复"}
              value={recovered}
              icon={
                <FontAwesome5 name="hospital-alt" size={24} color="white" />
              }
              sticker={todayRecovered}
            ></Box>
            <Box
              color={"#710193"}
              label={"测试"}
              value={tests}
              icon={
                <MaterialCommunityIcons
                  name="test-tube"
                  size={24}
                  color="white"
                />
              }
              sticker={"none"}
            ></Box>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textDecorationLine: "underline",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "VRound",
    color: "white",
  },
});

export default covidCountry;

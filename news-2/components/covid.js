import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "./header";
import * as Font from "expo-font";
import axios from "axios";
import { vw } from "react-native-expo-viewport-units";
import { LineChart } from "react-native-chart-kit";

const Covid = React.memo(({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [time, setTime] = useState([]);
  const loadFonts = async () => {
    await Font.loadAsync({
      VRound: require("../assets/VarelaRound-Regular.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    const newd = data || [];
    const newone = newd.filter((curr) => curr.country.includes(query));
    setData(newone);

    console.log("hi", query, data === newd, data);
  }, [query]);

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v3/covid-19/countries").then((res) => {
      const newone = res.data.filter((curr) => curr.country.includes(query));
      setData(newone);
    });
    loadFonts();
  }, [query, data]);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const first = Object.entries(res.data.cases);
        const second = first.filter((curr) => {
          const [one] = curr;
          const regex = /\d*\/1\/\d\d/g;
          return regex.test(one);
        });
        setTime(second);
      });
    loadFonts();
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header goBack={false}></Header>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      ></TextInput>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: time ? (time || []).map((curr) => curr[0]) : [],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={320}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "0.1",
            stroke: "#ffa726",
          },
        }}
      />
      <FlatList
        data={data}
        renderItem={({
          item: {
            country,
            countryInfo: { flag, lat, long },
            deaths,
            recovered,
            todayCases,
            active,
            tests,
          },
        }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Country", {
                  country,
                  flag,
                  deaths,
                  recovered,
                  todayCases,
                  active,
                  tests,
                  lat,
                  long,
                })
              }
            >
              <Image source={{ uri: flag }} style={styles.image}></Image>
              <Text
                style={[
                  styles.name,
                  styles.text,
                  {
                    fontSize: vw(9),
                  },
                ]}
                adjustsFontSizeToFit={true}
              >
                {country}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={({ country }) => country}
      ></FlatList>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontFamily: "VRound",
    margin: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: (2 / 3) * 100,
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
  },
});
export default Covid;

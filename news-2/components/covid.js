import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "./header";
import * as Font from "expo-font";
import axios from "axios";
import { vw } from "react-native-expo-viewport-units";

const Covid = React.memo(({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
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
      <FlatList
        data={data}
        renderItem={({
          item: {
            country,
            countryInfo: { flag },
          },
        }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Country")}
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

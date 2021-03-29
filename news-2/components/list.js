import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import * as Font from "expo-font";

const List = ({ list, navigationObj }) => {
  const currTime = (date) => {
    return `${date?.getHours()}:${
      date?.getMinutes() < 10
        ? `0${date?.getMinutes()}`
        : `${date?.getMinutes()}`
    }`;
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({ TimesNewRoman: require("../assets/TimesNew.otf") });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  console.log("2", navigationObj);
  return (
    <ScrollView style={{ height: "45%", width: "100%" }}>
      {list.map((curr, index) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
            <ListItem.Title
              style={styles.title}
              onPress={() => navigationObj.navigate("Article")}
            >
              {curr.title}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {curr.author}
            </ListItem.Subtitle>
            <ListItem.Subtitle style={styles.subtitle}>
              {currTime(curr.date)}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "TimesNewRoman",
    textDecorationLine: "underline",
  },
  subtitle: {
    color: "#808080",
  },
});

export default List;
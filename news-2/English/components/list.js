import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ListItem, ThemeProvider } from "react-native-elements";
import * as Font from "expo-font";

const List = ({ list, navigationObj, listHeight }) => {
  const currTime = (date) => {
    return `${date?.getHours()}:${
      date?.getMinutes() < 10
        ? `0${date?.getMinutes()}`
        : `${date?.getMinutes()}`
    }`;
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      TimesNewRoman: require("../../assets/TimesNew.otf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView
      style={{
        height: listHeight || "40%",
        width: "100%",
      }}
    >
      {list.map((curr, index) => (
        <ListItem
          key={index}
          bottomDivider
          containerStyle={{ backgroundColor: "#000" }}
        >
          <ListItem.Content>
            <ListItem.Title
              style={styles.title}
              onPress={() =>
                navigationObj.navigate("Article", { url: curr.url })
              }
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
    color: "#fff",
  },
  subtitle: {
    color: "#808080",
  },
});

export default List;

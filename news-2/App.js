import React from "react";
import { StyleSheet, Image, SafeAreaView, FlatList, View } from "react-native";
import CardComp from "./components/card";
import Header from "./components/header";

export default function App() {
  const news = [
    { title: "Covid cases exeed 1900!", author: "John Doe", date: new Date() },
    {
      title: "Hong Kong protesters stop doing stuff",
      author: "John Doe",
      date: new Date(),
    },
  ];
  return (
    <View>
      <Header></Header>
      <View style={styles.wrapper}>
        <FlatList
          horizontal={true}
          data={news}
          renderItem={({ item: { title, date, author } }) => {
            return (
              <CardComp title={title} date={date} author={author}></CardComp>
            );
          }}
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
        <View style={styles.horizontal}>
          <Image
            source={require("./assets/sitting.png")}
            style={styles.image}
          ></Image>
          <Image
            source={require("./assets/sitting2.png")}
            style={styles.image}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 170,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

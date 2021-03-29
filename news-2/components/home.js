import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CardComp from "./card";
import Header from "./header";
import List from "./list";

export default function Home({ navigation }) {
  const hotnews = [
    {
      title: "Covid cases exeed 1900",
      author: "John Doe",
      date: new Date(),
      img: "https://picsum.photos/500",
    },
    {
      title: "Hong Kong protesters stop doing stuff",
      author: "John Doe",
      date: new Date(),
      img: "https://picsum.photos/400",
    },
  ];

  const restNews = [
    {
      title: "Covid cases exeed 1900",
      author: "John Doe",
      date: new Date(),
      category: "",
    },
    {
      title: "Hong Kong protesters stop doing stuff",
      author: "John Doe",
      date: new Date(),
    },
    { title: "iPhone 123 is released", author: "John Doe", date: new Date() },
    {
      title: "Manchester United beats Liverpool",
      author: "John Doe",
      date: new Date(),
    },
  ];
  console.log("1", navigation);
  return (
    <View>
      <Header goBack={false}></Header>
      <View style={styles.wrapper}>
        <FlatList
          horizontal={true}
          data={hotnews}
          renderItem={({ item: { title, date, author, img } }) => {
            return (
              <CardComp
                title={title}
                date={date}
                author={author}
                img={img}
                navigationObj={navigation}
              ></CardComp>
            );
          }}
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>
      <List list={restNews} navigationObj={navigation}></List>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

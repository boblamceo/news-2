import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CardComp from "./card";
import Header from "./header";
import List from "./list";
import * as Localization from "expo-localization";

export default function Business({ navigation }) {
  const [news, setNews] = useState([]);
  const date = new Date();
  const currentDate = `${date.getUTCFullYear()}-${
    date.getMonth() + 1
  }-${date.getUTCDate()}`;
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=business&country=${Localization.region}&from=${currentDate}&to=${currentDate}&sortBy=popularity&apiKey=889fa0ba853e4b8394713d2c0cf908cb`,
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, []);
  const trim = (original, trimmedChar, spaces) => {
    const splitted = original.split(spaces);
    const returnedArr = [];

    for (let i = 0; i < splitted.length; i++) {
      let current = splitted[i];
      if (current === trimmedChar) {
        break;
      }
      returnedArr.push(current);
    }
    return returnedArr.join(spaces);
  };

  const hotnews = news
    .slice(0, 5)
    .map(
      ({ title, author, publishedAt, urlToImage, url, source: { name } }) => {
        const trimmedTitle = trim(title, "-", " ");
        return {
          title: trimmedTitle,
          author: author === "null" ? `${author} - ${name}` : `${name}`,
          date: new Date(publishedAt),
          img:
            urlToImage ||
            "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
          url,
        };
      },
    );

  const restNews = news
    .slice(5, news.length)
    .map(({ title, author, publishedAt, source: { name }, url }) => {
      const trimmedTitle = trim(title, "-", " ");
      return {
        title: trimmedTitle,
        author: `${author} - ${name}`,
        date: new Date(publishedAt),
        url,
      };
    });
  return (
    <View>
      <Header goBack={false}></Header>
      <View style={styles.wrapper}>
        <FlatList
          horizontal={true}
          data={hotnews}
          renderItem={({ item: { title, date, author, img, url } }) => {
            return (
              <CardComp
                title={title}
                date={date}
                author={author}
                img={img}
                navigationObj={navigation}
                url={url}
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

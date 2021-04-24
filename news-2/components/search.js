import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { StyleSheet, FlatList, View, TextInput, Text } from "react-native";
import CardComp from "./card";
import Header from "./header";
import List from "./list";
import * as Localization from "expo-localization";
import ModalDropdown from "react-native-modal-dropdown";
import * as countries from "i18n-iso-countries";
import countryList from "react-select-country-list";
import NoNews from "./noNews";
export default function Search({ navigation }) {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const curr = countries.getName(Localization.region, "en", {
    select: "official",
  });
  const [value, setValue] = useState(curr);
  console.log(
    countries.getName(Localization.region, "en", { select: "official" }),
    value,
  );
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(options[value].label);
  };
  const find = (search) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&country=${countries.getAlpha2Code(
          value,
          "en",
        )}&sortBy=popularity&apiKey=889fa0ba853e4b8394713d2c0cf908cb`,
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  };
  useEffect(() => {
    if (value === "United States") {
      setValue("United States of America");
    }
    find(query);
  }, [query, value]);
  console.log(
    `https://newsapi.org/v2/top-headlines?q=${query}&country=${countries.getAlpha2Code(
      value,
      "en",
    )}&sortBy=popularity&apiKey=889fa0ba853e4b8394713d2c0cf908cb`,
    news,
  );
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
  const filterResults = (value) => {
    setQuery(value);
    find(value);
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
        author: author === "null" ? `${author} - ${name}` : `${name}`,
        date: new Date(publishedAt),
        url,
      };
    });
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header goBack={false}></Header>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          onChangeText={filterResults}
          value={query}
        />
      </View>
      <View style={styles.dropWrapper}>
        <ModalDropdown
          options={options.map((curr) => {
            return curr.label;
          })}
          style={styles.dropdown}
          defaultValue={countries.getName(Localization.region, "en", {
            select: "official",
          })}
          onSelect={changeHandler}
        />
      </View>
      <View style={styles.wrapper}>
        {!news[0] ? <NoNews /> : null}
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
      <List
        list={restNews}
        navigationObj={navigation}
        listHeight={"31%"}
      ></List>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: "81%",
    height: "6%",
    flexWrap: "wrap",
    paddingLeft: 3,
    justifyContent: "center",
    fontSize: 15,
    marginTop: 20,
    marginLeft: "9.5%",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: "100%",
    fontSize: 16,
  },
  dropWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

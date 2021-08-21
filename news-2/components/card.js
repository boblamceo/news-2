import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const CardComp = ({ title, date, author, img, navigationObj, url }) => {
  const currTime = (date) => {
    return `${date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    }`;
  };
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Card.Cover
          source={{
            uri: img,
            crop: { top: 100, bottom: 100 },
          }}
        />
        <Title
          onPress={() => navigationObj.navigate("Article", { url })}
          style={{ color: "#fff" }}
        >
          {title}
        </Title>
        <Paragraph style={styles.paragraph}>{currTime(date)}</Paragraph>
        <Paragraph style={styles.paragraph}>{author}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: "100%",
    backgroundColor: "#000",
  },
  paragraph: {
    color: "#808080",
  },
});

export default CardComp;

import React from "react";
import { View, Image } from "react-native";
import { WebView } from "react-native-webview";
import Header from "./header";

const Article = ({ navigation, route }) => {
  const { url } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Header goBack={true} func={() => navigation.navigate("Home")}></Header>

      <WebView
        startInLoadingState={true}
        source={{ uri: url }}
        style={{ width: "100%", height: "50%" }}
      />
    </View>
  );
};

export default Article;

import React, { useState } from "react";
import { View, Image } from "react-native";
import { WebView } from "react-native-webview";
import Header from "./header";
import Load from "../../assets/Load.gif";

const Article = ({ navigation, route }) => {
  const { url } = route.params;
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Header goBack={true} func={() => navigation.goBack()}></Header>
      {loading ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={Load}
            style={{ width: 100, height: 100, marginBottom: 100 }}
          ></Image>
        </View>
      ) : null}
      <WebView
        source={{ uri: url }}
        style={{ width: "100%", height: "50%" }}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={(syntheticEvent) => {
          setLoading(false);
        }}
        originWhitelist={["*"]}
      />
    </View>
  );
};

export default Article;

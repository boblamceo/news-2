import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import { stickerStyles } from "./sticker";

const Map = ({ lat, long, data }) => {
  const { country, todayCases, deaths, recovered, active, todayDeaths } = data;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const loadFonts = async () => {
    await Font.loadAsync({
      VRound: require("../../assets/VarelaRound-Regular.ttf"),
    });
  };
  useEffect(() => {
    loadFonts();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 100,
        longitudeDelta: 100,
      }}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
    >
      <Marker
        coordinate={{ latitude: lat, longitude: long }}
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View style={[styles.rect, { opacity: fadeAnim }]}>
          <Text style={styles.title}>{country}</Text>
          {/* stuff x 100 % of 20 */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={[stickerStyles.redSticker, { marginVertical: 5 }]}>
              <Text style={{ color: "#fff", fontSize: 8 }}>+{todayCases}</Text>
            </View>
            <View style={[stickerStyles.blackSticker, { marginVertical: 5 }]}>
              <Text style={{ color: "#fff", fontSize: 8 }}>+{todayDeaths}</Text>
            </View>
          </View>
          <Text style={[styles.smallText, { color: "#fff" }]}>
            案例
            {"\n"}
            {active}
          </Text>
          <Text style={[styles.smallText, { color: "#fff" }]}>
            死亡
            {"\n"}
            {deaths}
          </Text>
          <Text style={[styles.smallText, { color: "#fff" }]}>
            恢复
            {"\n"}
            {recovered}
          </Text>
        </Animated.View>
        <View style={styles.circle}></View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  smallText: {
    marginBottom: 5,
    textAlign: "center",
    fontSize: 16,
  },

  rect: {
    width: 150,
    borderRadius: 10,
    backgroundColor: "#000",
    borderColor: "#249225",
    borderWidth: 2,
    shadowColor: "#249225",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 50,
    paddingHorizontal: 10,
    elevation: 20,
    alignItems: "center",
  },
  image: {
    height: 23,
    width: 30,
    borderRadius: 5,
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: "#B0FC38",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 90,
    shadowColor: "#249225",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.32,
    shadowRadius: 10,

    elevation: 100,
  },
});
export default Map;

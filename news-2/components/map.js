import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ lat, long, flag }) => {
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
    >
      <Marker coordinate={{ latitude: lat, longitude: long }}>
        <Image source={{ uri: flag }} style={styles.image}></Image>
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
  image: {
    height: 35,
    width: 50,
    borderRadius: 10,
  },
});
export default Map;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Colors } from "react-native-paper";

const Header = () => {
  return (
    <View style={[styles.header, styles.row]}>
      <View style={[styles.stuff, styles.row]}>
        <View style={[styles.left, styles.row]}>
          <IconButton
            icon="menu"
            size={30}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={[styles.right, styles.row]}>
          <Text style={styles.title}>The News App</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#43D26C",
    width: "100%",
    height: 80,
    alignItems: "center",
  },
  stuff: {
    // backgroundColor: "red",
    width: 900,
    marginTop: 30,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  left: {
    width: "12%",
    alignItems: "center",
  },
  right: {
    width: "36%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});

export default Header;

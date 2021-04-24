import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home";
import Article from "./components/article";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Business from "./components/business";
import Entertainment from "./components/entertainment";
import Health from "./components/health";
import Science from "./components/science";
import Sports from "./components/sports";
import Technology from "./components/technology";
import Search from "./components/search";
import Covid from "./components/covid";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const StackApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={StackApp} />
        <Drawer.Screen name="Business" component={Business} />
        <Drawer.Screen name="Entertainment" component={Entertainment} />
        <Drawer.Screen name="Health" component={Health} />
        <Drawer.Screen name="Science" component={Science} />
        <Drawer.Screen name="Sports" component={Sports} />
        <Drawer.Screen name="Technology" component={Technology} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Covid-19" component={Covid} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

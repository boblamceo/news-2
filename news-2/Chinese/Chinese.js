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
import covidCountry from "./components/covidCountry";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Covi = createStackNavigator();

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
const BusinessApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const EntertainmentApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Entertainment" component={Entertainment} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const HealthApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Health" component={Health} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const ScienceApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Science" component={Science} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const SportsApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Sports" component={Sports} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const TechnologyApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Technology" component={Technology} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};
const CovidApp = () => {
  return (
    <Covi.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Covi.Screen name="Covid-19" component={Covid} />
      <Covi.Screen name="Country" component={covidCountry} />
    </Covi.Navigator>
  );
};
const SearchApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default function Chinese() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#111",
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#df2407",
          inactiveTintColor: "grey",
        }}
      >
        <Drawer.Screen name="主要" component={StackApp} />
        <Drawer.Screen name="商业" component={BusinessApp} />
        <Drawer.Screen name="娱乐" component={EntertainmentApp} />
        <Drawer.Screen name="健康" component={HealthApp} />
        <Drawer.Screen name="科学" component={ScienceApp} />
        <Drawer.Screen name="体育" component={SportsApp} />
        <Drawer.Screen name="科技" component={TechnologyApp} />
        <Drawer.Screen name="搜索" component={SearchApp} />
        <Drawer.Screen name="新冠状病毒" component={CovidApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

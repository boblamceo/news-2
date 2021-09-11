// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./components/home";
// import Article from "./components/article";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Business from "./components/business";
// import Entertainment from "./components/entertainment";
// import Health from "./components/health";
// import Science from "./components/science";
// import Sports from "./components/sports";
// import Technology from "./components/technology";
// import Search from "./components/search";
// import Covid from "./components/covid";
// import covidCountry from "./components/covidCountry";

// const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const Covi = createStackNavigator();

// const StackApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const BusinessApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Business" component={Business} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const EntertainmentApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Entertainment" component={Entertainment} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const HealthApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Health" component={Health} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const ScienceApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Science" component={Science} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const SportsApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Sports" component={Sports} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const TechnologyApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Technology" component={Technology} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };
// const CovidApp = () => {
//   return (
//     <Covi.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Covi.Screen name="Covid-19" component={Covid} />
//       <Covi.Screen name="Country" component={covidCountry} />
//     </Covi.Navigator>
//   );
// };
// const SearchApp = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Search" component={Search} />
//       <Stack.Screen name="Article" component={Article} />
//     </Stack.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerStyle={{
//           backgroundColor: "#111",
//         }}
//         drawerContentOptions={{
//           activeTintColor: "#fff",
//           activeBackgroundColor: "#2E8B57",
//           inactiveTintColor: "grey",
//         }}
//       >
//         <Drawer.Screen name="Main" component={StackApp} />
//         <Drawer.Screen name="Business" component={BusinessApp} />
//         <Drawer.Screen name="Entertainment" component={EntertainmentApp} />
//         <Drawer.Screen name="Health" component={HealthApp} />
//         <Drawer.Screen name="Science" component={ScienceApp} />
//         <Drawer.Screen name="Sports" component={SportsApp} />
//         <Drawer.Screen name="Technology" component={TechnologyApp} />
//         <Drawer.Screen name="Search" component={SearchApp} />
//         <Drawer.Screen name="Covid-19" component={CovidApp} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import English from "./English/English";
import Home from "./Home";
import Chinese from "./Chinese/Chinese";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="English" component={English}></Stack.Screen>
        <Stack.Screen name="Chinese" component={Chinese}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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

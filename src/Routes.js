import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StatusBar from "./components/StatusBar";
import LevelUp from "./screens/LevelUp";
import Home from "./screens/Home";
import SelectClass from "./screens/SelectClass";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function Routes() {
  const charAttributes = useSelector((state) => state.charAttributes);
  const initialScreen = charAttributes.class == "hollow" ? "SelectClass" : "Home";

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="SelectClass" component={SelectClass} />
        <Stack.Screen name="LevelUp" component={LevelUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

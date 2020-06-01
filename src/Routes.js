import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StatusBar from "./components/StatusBar";
import LevelUp from "./screens/LevelUp";
import SelectClass from "./screens/SelectClass";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="SelectClass"
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        <Stack.Screen name="SelectClass" component={SelectClass} />
        <Stack.Screen name="LevelUp" component={LevelUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

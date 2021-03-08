import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/Main";

const Stack = createStackNavigator();

function AppNavigator({}) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
}
export default AppNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/Landing";
import RegisterScreen from "../screens/Register";

const Stack = createStackNavigator();

function AuthNavigator({}) {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
export default AuthNavigator;

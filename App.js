import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import * as firebase from "firebase";
import firebaseConfig from "./app/config/firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

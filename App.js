import React from "react";
import AppContext from "./app/context/AppContext";
import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  return (
    <AppContext>
      <MainNavigator />
    </AppContext>
  );
}

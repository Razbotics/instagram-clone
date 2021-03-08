import React from "react";
import { StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "./Screen";

function Landing({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Landing;

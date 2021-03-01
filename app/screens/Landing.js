import React from "react";
import { StyleSheet, Button } from "react-native";
import Screen from "./Screen";

function Landing({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
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

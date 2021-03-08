import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer, style]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;

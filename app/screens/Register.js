import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import firebase from "firebase";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";

function Register({}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen>
      <AppTextInput
        icon="account"
        placeholder="Name"
        autoCompleteType="username"
        onChangeText={(name) => setName(name)}
      />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCompleteType="email"
        secureTextEntry={false}
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCompleteType="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <Button title="Register" onPress={handleSubmit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Register;

import React from "react";
import { useState } from "react";
import firebase from "firebase";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";
import AppButton from "../components/AppButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/users/reducer";

function Login({}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => dispatch(loginUser({ email, password }));

  return (
    <Screen>
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCorrect={false}
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        secureTextEntry={false}
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCompleteType="off"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <AppButton title="Login" onPress={handleSubmit} />
    </Screen>
  );
}

export default Login;

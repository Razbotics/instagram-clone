import React from "react";
import { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";
import AppButton from "../components/AppButton";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/users/reducer";

function Register({}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Screen>
      <AppTextInput
        icon="account"
        placeholder="Name"
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={(name) => setName(name)}
      />
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

      <AppButton title="Register" onPress={handleSubmit} />
    </Screen>
  );
}

export default Register;

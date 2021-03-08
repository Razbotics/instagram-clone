import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../components/AppButton";
import { logoutUser } from "../store/users/reducer";
import Screen from "./Screen";

function Main({}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Screen>
      <Text>Hello {user}</Text>
      <AppButton title="Logout" onPress={handleLogout} />
    </Screen>
  );
}

export default Main;

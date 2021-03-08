import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, verifyUser } from "../store/users/reducer";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

function MainNavigator() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user.userLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default MainNavigator;

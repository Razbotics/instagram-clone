import { configureStore } from "@reduxjs/toolkit";
import user from "./users/reducer";

export default configureStore({
  reducer: {
    user,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db, firebase } from "../../config/firebase";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  try {
    const currentUserId = firebase.auth().currentUser.uid;
    const snapshot = await db.collection("users").doc(currentUserId).get();
    if (snapshot.exists) return snapshot.data();
  } catch (err) {
    console.log(err);
    return rejectWithValue();
  }
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      await db.collection("users").doc(user.uid).set({
        name,
        email,
      });
      return name;
    } catch (err) {
      console.log(err);
      return rejectWithValue();
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (user) dispatch(fetchUser());
      else return rejectWithValue();
    } catch (err) {
      console.log(err);
    }
  }
);

export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  await firebase.auth().signOut();
});

export const verifyUser = createAsyncThunk(
  "users/verifyUser",
  async (_, { rejectWithValue, dispatch }) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return rejectWithValue();
      return dispatch(fetchUser());
    });
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
    userLoggedIn: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.name;
      state.userLoggedIn = true;
    },

    [fetchUser.rejected]: (state) => {
      state.currentUser = null;
      state.userLoggedIn = false;
    },

    [registerUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.userLoggedIn = true;
    },

    [logoutUser.fulfilled]: (state) => {
      state.currentUser = null;
      state.userLoggedIn = false;
    },

    [verifyUser.rejected]: (state) => {
      state.currentUser = null;
      state.userLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
export const selectUser = (state) => state.user;

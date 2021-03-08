import React, { useContext } from "react";
import store from "../store";
import { Provider } from "react-redux";
import { firebase, db } from "../config/firebase";

const FirebaseContext = React.createContext();
const FirebaseDbContext = React.createContext();

export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseDB = () => useContext(FirebaseDbContext);

function AppContext({ children }) {
  return (
    <FirebaseContext.Provider value={firebase}>
      <FirebaseDbContext.Provider value={db}>
        <Provider store={store}>{children}</Provider>
      </FirebaseDbContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default AppContext;

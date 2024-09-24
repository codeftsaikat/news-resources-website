import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const Context = createContext();
const auth = getAuth(app);
function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   define the create user register information
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  //  observation user information
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        "You can see all of the information throw the on auth state change",
        currentUser
      );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, setUser, logIn, logOut, loading };

  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
}

export default AuthContext;

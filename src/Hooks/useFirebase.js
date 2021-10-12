import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
    })
  }, []);

  return {
    user,
    error,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;

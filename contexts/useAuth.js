import { View, Text } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';


const AuthContext = createContext();
const AllValues = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(function (user) {
      setUser(user);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const registration = (form) => {
    auth().createUserWithEmailAndPassword(form.email, form.password).then((res) => {
      setError(null)
      console.log(res);
    }).catch(error => setError(error.message))
  }

  const login = (form) => {
    auth().signInWithEmailAndPassword(form.email,form.password).then(res=>{
      console.log(res);
    }).catch(error => setError(error.message))
  }

  const logout = () => {
    auth().signOut()
  }

  return {
    user,
    registration,
    error,
    logout,
    login,
    setError
  }
}

export const AuthProvider = (props) => {
  const all = AllValues();
  return (
    <AuthContext.Provider value={all}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;

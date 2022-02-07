import { View, Text } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage'


const AuthContext = createContext();
const AllValues = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [gallery, setGallery] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(function (user) {
      if (user) {
        firestore().collection('users').doc(user.uid).onSnapshot((snap) => {
          snap.data().uid = user.uid
          setUser(snap.data());
        })
        firestore().collection('gallery').doc(user.uid).onSnapshot(snap => {
          if (snap.data()) {
            snap.data().uid = user.uid
            setGallery(snap.data());
          }
        })
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const registration = (form) => {
    auth().createUserWithEmailAndPassword(form.email, form.password).then((res) => {
      firestore()
        .collection('users')
        .doc(res.user.uid)
        .set({
          name: form.name,
          email: form.email,
          phone: form.phone
        })
        .then(() => {
          setError(null)
        });
    }).catch(error => setError(error.message))
  }

  const login = (form) => {
    auth().signInWithEmailAndPassword(form.email, form.password).then(res => {
      console.log(res);
    }).catch(error => setError(error.message))
  }

  const logout = () => {
    auth().signOut()
  }

  const updateProfile = (form) => {
    firestore().collection('users').doc(user.uid).update(form).then((res) => console.log(res)).catch(error => console.log(error.message))
  }

  const updateProfilePic = async (image) => {
    if (image) {
      const imageName = user.uid + Date.now() + "." + image.assets[0].fileName.split('.')[1];
      const reference = storage().ref(imageName);
      try {
        await reference.putFile(image.assets[0].uri)
      } catch (error) {
        console.log(error);
      }
      const profile_pic = gallery ? [...gallery.profile_pic, imageName] : [imageName];
      firestore().collection('gallery').doc(user.uid).set({ profile_pic }).then(res => {
        console.log(res);
      })
    } else null;
  }

  return {
    user,
    registration,
    error,
    logout,
    login,
    setError,
    updateProfile,
    updateProfilePic,
    gallery
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

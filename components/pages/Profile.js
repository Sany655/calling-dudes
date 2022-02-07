import { View, Text, ScrollView, Image, Pressable, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../../contexts/useAuth';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './Profile/About';
import Friends from './Profile/Friends';
import Timeline from './Profile/Timeline';
import AboutModal from './Modals/AboutModal';
import UploadProfilePicModal from './Modals/UploadProfilePicModal';
import ImageShowModal from './Modals/ImageShowModal';
import storage from '@react-native-firebase/storage';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Friend" component={Friends} />
    </Tab.Navigator>
  );
}

const Profile = () => {
  const { user, gallery } = useAuth()
  const [images, setimages] = useState({pp:"",cp:""});

  useEffect(() => {
    const getImageUrl = async () => {
      if (gallery) {
        const reference = storage().ref(gallery.profile_pic[gallery.profile_pic.length - 1])
        const url = await reference.getDownloadURL();
        setimages({...images,pp:url});
      }
    }
    return getImageUrl;
  }, [gallery]);
  return (
    <>
      <View style={{ backgroundColor: "#ffffff" }}>
        <ImageShowModal>
          <Image style={{ borderWidth: 1, borderColor: "gray", height: 150 }} source={{ uri: user.cover_pic }} />
        </ImageShowModal>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: -80 }}>
          <View style={{ shadowColor: "black" }}>
            <ImageShowModal images={images} style={{ height: 100, width: 100, borderRadius: 100 }}>
              <Image source={images.pp?{uri:images.pp}:require('../../assets/default_user.png')} style={{ height: 100, width: 100, borderRadius: 100 }} />
            </ImageShowModal>
            <UploadProfilePicModal />
          </View>
          <View style={{}}>
            <Pressable style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', padding: 5, borderWidth: 1, borderColor: "gray" }} onPress={() => alert("cover pic edited")}>
              <IonIcons style={{ marginRight: 5 }} name='camera-outline' size={20} />
              <Text>Edit cover photo</Text>
            </Pressable>
            <AboutModal />
          </View>
        </View>
        {user.name ? <Text style={{ fontSize: 20, textAlign: "center", color: "#000", marginVertical: 10 }}>{user.name}</Text> : null}
        {user.bio ? <Text style={{ fontSize: 12, textAlign: "center", color: "#000", marginVertical: 10 }}>{user.bio}</Text> : null}
      </View>
      <ProfileTabs />
    </>
  );
};

export default Profile;

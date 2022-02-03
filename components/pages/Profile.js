import { View, Text, ScrollView, Image, Pressable, Button } from 'react-native';
import React from 'react';
import useAuth from '../../contexts/useAuth';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './Profile/About';
import Friends from './Profile/Friends';
import Timeline from './Profile/Timeline';
import AboutModal from './Modals/AboutModal';

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
  const { user } = useAuth()
  return (
    <>
      <View style={{ backgroundColor: "#ffffff" }}>
        <Image style={{ borderWidth: 1, borderColor: "gray", height: 150, }} source={{ uri: "https://scontent.fcgp2-1.fna.fbcdn.net/v/t39.30808-6/p720x720/254221152_3209242459309678_9104189625065174454_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHanir1dRlCDsRRmGNq5RWHz3ZXHvjXe-HPdlce-Nd74REEU8YPaGOU6-T-W2vd2i8K6sTTgJw9XkYZ0ZY-H5Sj&_nc_ohc=P9HBTlIPkWUAX_yMOMM&tn=HQLqMJU1RvdxjoF7&_nc_ht=scontent.fcgp2-1.fna&oh=00_AT_GLnrCNr9wtzJ7fLxM620VY_E6CsDv-tgRPWmLSdkbSw&oe=61FD0E05" }} />
        <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginTop:-80 }}>
          <View style={{ shadowColor: "black" }}>
            <Image source={{ uri: "https://scontent.fcgp2-1.fna.fbcdn.net/v/t1.6435-1/c0.20.200.200a/p200x200/48392103_2324506877783245_5235417395538952192_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHsg0pIUo1CvkX7FZ5G6GCBZFwZW7xZOiBkXBlbvFk6IPh2evo4at5b0_8YjpgArKIJhEyx07Mb2F4mnzagukoP&_nc_ohc=1nQaqUevPXMAX9aaoCz&tn=HQLqMJU1RvdxjoF7&_nc_ht=scontent.fcgp2-1.fna&oh=00_AT-QlagAwEIdK5_uwTzJrEkGA1FsKVr3loO9xBT4nygIqg&oe=621C670E" }} style={{ height: 100, width: 100, borderRadius: 100 }} />
            <IonIcons style={{  position:"absolute",bottom: 0, right: 0, backgroundColor: "#f0f0f0", borderRadius: 100, padding: 5, borderColor: "gray", borderWidth: 1 }} name='camera' color="#000" size={25} onPress={() => alert('i am pressed')} />
          </View>
          <View style={{ }}>
            <Pressable style={{ marginBottom:10,flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', padding: 5 }} onPress={() => alert("cover pic edited")}>
              <IonIcons style={{ marginRight: 5 }} name='camera-outline' size={20} />
              <Text>Edit cover photo</Text>
            </Pressable>
            <AboutModal />
          </View>
        </View>
        {/* <Text style={{fontSize:20,textAlign:"center",color:"#000",marginVertical:10}}>Mohammad mazharul alam</Text> */}
      </View>
      <ProfileTabs />
    </>
  );
};

export default Profile;

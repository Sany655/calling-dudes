import { Pressable } from 'react-native';
import Feed from '../pages/Feed'
import React from 'react';
import Inbox from '../pages/Inbox';
import Profile from '../pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useAuth from '../../contexts/useAuth';

const Tab = createBottomTabNavigator();
const Layout = () => {
  const { logout } = useAuth()

  return (
    <Tab.Navigator screenOptions={{
      headerRight: () => {
        return <Pressable onPress={logout} style={{marginEnd:15}}>
          <Ionicon name='log-out-outline' size={24} color={'#2196F3'} />
        </Pressable>
      },
    }}>
      <Tab.Screen name='Feed' component={Feed} options={{ tabBarIcon: ({ color }) => (<Ionicon color={color} name="newspaper-outline" size={24} />) }} />
      <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ({ color }) => (<Ionicon color={color} name="person-circle-outline" size={24} />) }} />
      <Tab.Screen name='Inbox' component={Inbox} options={{ tabBarIcon: ({ color }) => (<Ionicon color={color} name="chatbox-outline" size={24} />) }} />
    </Tab.Navigator>
  );
};

export default Layout;

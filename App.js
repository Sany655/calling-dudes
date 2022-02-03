import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import SplashScreen from 'react-native-splash-screen'
import Login from './components/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/pages/Register';
import Chat from './components/pages/Chat'
import { LogBox } from 'react-native';
import useAuth, { AuthProvider } from './contexts/useAuth';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Suggestion from './components/Suggestion';

const Stack = createNativeStackNavigator();

function Wrapper() {
  const { user, logout } = useAuth();

  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {user ?
          (
            <>
              <Stack.Screen name='Layout' component={Layout} />
              <Stack.Screen name='Chat' component={Chat} options={{
                headerShown: true,
                headerRight: () => {
                  return <Pressable onPress={logout} style={{ marginEnd: 15 }}>
                    <Ionicon name='log-out-outline' size={24} color={'#2196F3'} />
                  </Pressable>
                },
              }} />
              <Stack.Screen name='Suggestion' component={Suggestion} options={{
                headerShown: true,
                headerRight: () => {
                  return <Pressable onPress={logout} style={{ marginEnd: 15 }}>
                    <Ionicon name='log-out-outline' size={24} color={'#2196F3'} />
                  </Pressable>
                },
              }} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const App = () => (
  <AuthProvider>
    <Wrapper />
  </AuthProvider>
)

export default App;
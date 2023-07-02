import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoginScreen from "./screens/Login/LoginScreen";
import InitialScreen from "./screens/InitialScreen/InitialScreen";
import GetStartedScreen from "./screens/GetStarted/GetStartedScreen";
import PropertyRegisterScreen from "./screens/PropertyRegister/PropertyRegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import DetailsScreen from "./screens/Home/Details/DetailsScreen";
import ChatScreen from "./screens/Home/Chat/ChatScreen";
import UserRegister from "./screens/UserRegister/UserRegisterScreen";
import { useFonts } from "expo-font";
import Toast from 'react-native-toast-message';
import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync();

import UseFonts from "./Hooks/UseFonts";
import { useCallback, useState } from "react";
import AgentProfile from './screens/Home/AgentProfile/AgentProfile'
import ProfileScreen from './screens/Profile/profile'
import ChatHome from "./screens/Home/Chat/ChatHomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    InterBlack: require("./assets/fonts/Inter-Black.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={onLayoutRootView}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="InitialScreen"
          component={InitialScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GetStarted"
          component={GetStartedScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="propertyOwnerRegister"
          component={PropertyRegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={HomeScreen}
          name="Home"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={DetailsScreen}
          name="Details"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={ChatScreen}
          name="Chat"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={AgentProfile}
          name="AgentProfile"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={ProfileScreen}
          name="ProfilePage"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={ChatHome}
          name="ChatHome"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={UserRegister}
          name="UserRegister"
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login/LoginScreen";
import InitialScreen from "./screens/InitialScreen/InitialScreen";
import GetStartedScreen from "./screens/GetStarted/GetStartedScreen";
import PropertyRegisterScreen from "./screens/PropertyRegister/PropertyRegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import DetailsScreen from "./screens/Home/Details/DetailsScreen";
import ChatScreen from "./screens/Home/Chat/ChatScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import AgentProfile from "./screens/Home/AgentProfile/AgentProfile";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import ChatHome from "./screens/Home/Chat/ChatHomeScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function Index() {
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
      <StatusBar translucent={true} />
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
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;

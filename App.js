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
import AgentProfile from './screens/Home/AgentProfile/agentProfile'
import ProfileScreen from './screens/Profile/profile'
import ChatHome from "./screens/Home/Chat/ChatHomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

export default App;

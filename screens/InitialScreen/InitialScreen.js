import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import styles from "./InitialScreenStyle";
import { useEffect, useState } from "react";
import { icons, images } from "../../constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const InitialScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("InitialScreen");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={images.initialPageBackground}
        style={styles.backgroundImage}
      >
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.btnValue}>Get Started</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.signInContainer}>
            <View style={styles.line} />
            <Text style={styles.signIn}>Sign In With</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialMediaIcons}>
            <TouchableOpacity style={styles.google}>
              <Image
                style={styles.google_logo}
                source={icons.google}
                resizeMethod="auto"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.meta}>
              <Image style={styles.meta_logo} source={icons.facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.apple}>
              <Image style={styles.apple_logo} source={icons.apple} />
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.text}>Already Have an account?</Text>
            <Text
              style={styles.login}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;

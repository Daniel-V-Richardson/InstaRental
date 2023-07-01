import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Toast from "react-native-toast-message";
import { icons, images } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./LoginScreenStyle";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import AnimatedLoader from "react-native-animated-loader";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        navigation.navigate("Home");
        Toast.show({
          type: "success",
          text1: "Welcome " + userEmail+"!",
          position: "bottom",
          visibilityTime: 3000,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setIsLoading(false);
        if (errorCode == "auth/wrong-password") {
          Toast.show({
            type: "error",
            text1: "You have Entered Wrong Password",
            position: "top",
            visibilityTime: 4000,
          });
        }
        if (errorCode == "auth/too-many-requests") {
          Toast.show({
            type: "error",
            text1: "OMG! too many requests",
            text2:"Sorry! Your Account has been temporarly Locked",
            position: "top",
            visibilityTime: 4000,
          });
        }
      });
  };

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Logging In Please wait...</Text>
      </AnimatedLoader>
      <ImageBackground
        source={images.registerBackground}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <View style={styles.textHeader}>
            <Text style={styles.text}>Login to your account</Text>
          </View>
          <Text style={styles.label}> Email Address : </Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="envelope"
              size={20}
              color="#777"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email "
              placeholderTextColor="#777"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}> Password : </Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={20}
              color="#777"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password "
              placeholderTextColor="#777"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.subButton}>
            <TouchableOpacity onPress={() => handleLogin()}>
              <View style={styles.buttonContainer}>
                <Text style={styles.btnValue}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("InitialScreen")}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.btnValue} onPress={() => {}}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Toast />
    </View>
  );
}

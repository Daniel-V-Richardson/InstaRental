import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { icons, images } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./LoginScreenStyle";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.buttonContainer}>
                <Text style={styles.btnValue} onPress={() => {}}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

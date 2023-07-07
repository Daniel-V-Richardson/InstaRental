import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Toast from "react-native-toast-message";
import React, { useState } from "react";
import { FONT, icons, images } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import AnimatedLoader from "react-native-animated-loader";

import styles from "./UserRegisterScreenStyle";
import { RadioButton } from "react-native-paper";

const UserRegister = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = async () => {
    setIsLoading(true);

    try {
      const emailExists = await isEmailRegistered(emailAddress);
      if (emailExists) {
        Toast.show({
          type: "error",
          text1: "The Entered Mail is already in use",
          position: "top",
          visibilityTime: 4000,
        });
        setIsLoading(false);
        return;
      }

      const isStrongPassword = checkPasswordStrength(password);
      if (!isStrongPassword) {
        Toast.show({
          type: "error",
          text1:
            "Passwords must contain 6 digits uppercase,lowercase and atleast 1 symbol ",
          position: "top",
          visibilityTime: 4000,
        });
        setIsLoading(false);
        return;
      }
      createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          const uid = user.uid;
          addUserToFirestore(uid);

          navigation.navigate("Home");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  async function addUserToFirestore(uid) {
    const newData = {
      uid,
      userName,
      emailAddress,
      password,
      location,
      phoneNumber,
      gender,
      role: "user",
    };

    const docRef = doc(collection(db, "Users"), uid);
    await setDoc(docRef, newData);
    const documentId = docRef.id;
  }

  const isEmailRegistered = async (email) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(getFirestore(), "Users"),
          where("emailAddress", "==", email)
        )
      );
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email registration: ", error);
      return false; // Assume email is not registered to allow data storage
    }
  };
  const checkPasswordStrength = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <View>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Registering User information...</Text>
      </AnimatedLoader>
      <ImageBackground
        source={images.propertyRegister}
        style={styles.backgroundImage}
      >
        <View style={styles.textHeader}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => navigation.navigate("GetStarted")}
          >
            <Image
              style={styles.backBtn}
              resizeMode="cover"
              source={icons.back}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Enter your Details</Text>
        </View>
        <ScrollView
          scrollEnabled={true}
          style={styles.scrollView}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={styles.container}>
            {/* <Text style={styles.label}>User Name : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="user"
                size={23}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter User Name"
                placeholderTextColor="#777"
                onChangeText={setUserName}
              />
            </View>
            {/* <Text style={styles.label}> Email Address : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="envelope"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your Email "
                placeholderTextColor="#777"
                keyboardType="email-address"
                value={emailAddress}
                autoCapitalize="none"
                onChangeText={(text) => setEmailAddress(text)}
              />
            </View>

            {/* <Text style={styles.label}> Password : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="lock"
                size={23}
                color="#fff"
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

            {/* <Text style={styles.label}> Location : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="map-marker"
                size={23}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter the location "
                placeholderTextColor="#777"
                onChangeText={setLocation}
              />
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="phone"
                size={23}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your Phone Number "
                placeholderTextColor="#777"
                onChangeText={setPhoneNumber}
              />
            </View>
            <Text style={styles.label}> Select Your Gender : </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="Male"
                color="lightgreen"
                uncheckedColor="white"
                status={gender === "Male" ? "checked" : "unchecked"}
                onPress={() => setGender("Male")}
              />

              <Text
                style={{ color: "white", fontFamily: FONT.black, fontSize: 16 }}
              >
                Male
              </Text>
              <RadioButton
                value="Female"
                color="lightgreen"
                uncheckedColor="white"
                status={gender === "Female" ? "checked" : "unchecked"}
                onPress={() => setGender("Female")}
              />
              <Text
                style={{ color: "white", fontFamily: FONT.black, fontSize: 16 }}
              >
                Female
              </Text>
              <RadioButton
                value="Others"
                color="lightgreen"
                uncheckedColor="white"
                status={gender === "Others" ? "checked" : "unchecked"}
                onPress={() => setGender("Others")}
              />
              <Text
                style={{ color: "white", fontFamily: FONT.black, fontSize: 16 }}
              >
                Others
              </Text>
            </View>
            <View style={styles.subButton}>
              <TouchableOpacity onPress={handleRegistration}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.btnValue}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Toast />
      </ImageBackground>
    </View>
  );
};

export default UserRegister;

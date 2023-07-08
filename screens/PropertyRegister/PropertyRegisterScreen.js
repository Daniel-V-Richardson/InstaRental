import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Button,
  FlatList,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { icons, images } from "../../constants";
import React, { useState, useEffect } from "react";
import styles from "./PropertyRegisterScreenStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Toast from "react-native-toast-message";
import AnimatedLoader from "react-native-animated-loader";
import { useRoute } from "@react-navigation/native";

const PropertyRegisterScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [totalRooms, setTotalRooms] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState([]);

  const route = useRoute();
  useEffect(() => {
    if (route.params?.imageUrls) {
      setImageUploaded(route.params.imageUrls);
    }
  }, [route.params]);

  const handleRegistration = async () => {
    setIsLoading(true);
    console.log(imageUploaded);
    try {
      if (imageUploaded.length == 0) {
        Toast.show({
          type: "error",
          text1: "Upload Images",
          text2: "Atleast add 3 images inorder to register",
          position: "top",
          visibilityTime: 4000,
        });
        setIsLoading(false);
        return;
      }
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
          text2:
            "Password must contain 6 digits uppercase,lowercase and atleast 1 symbol ",
          text1: "Weak Password!",
          position: "top",
          visibilityTime: 4000,
        });
        setIsLoading(false);
        alert(
          "Password must contain atleast 8 digits which must contain uppercase,lowercase and atleast 1 symbol."
        );
        return;
      }
      createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          const uid = user.uid;
          addUserToFirestore(uid);
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
      rent,
      advanceAmount,
      totalRooms,
      description,
      imageUploaded,
      role: "owner",
      ratings:'4'
    };
    const docRef = doc(collection(db, "Owners"), uid);
    await setDoc(docRef, newData);
    const documentId = docRef.id;
    navigation.navigate("Home");
  }

  const isEmailRegistered = async (email) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(getFirestore(), "Owners"),
          where("emailAddress", "==", email)
        )
      );
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email registration: ", error);
      return false;
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
        <Text>Registering Your information...</Text>
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
            <Stack.Screen options={{ headerShown: false }} />
            {/* <Text style={styles.label}>User Name : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="user"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your Full Name"
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
                size={20}
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
                size={20}
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

            {/* <Text style={styles.label}> Rent : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="dollar"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Monthly Rent "
                placeholderTextColor="#777"
                keyboardType="number-pad"
                onChangeText={setRent}
              />
            </View>

            {/* <Text style={styles.label}> Advance Amount : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="money"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter the advance amount"
                placeholderTextColor="#777"
                keyboardType="number-pad"
                onChangeText={setAdvanceAmount}
              />
            </View>

            {/* <Text style={styles.label}> Total Rooms : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="bed"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Number of Rooms "
                placeholderTextColor="#777"
                keyboardType="number-pad"
                onChangeText={setTotalRooms}
              />
            </View>
            {/* <Text style={styles.label}> Description : </Text> */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="pencil"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Description of the house"
                placeholderTextColor="#777"
                multiline={true}
                numberOfLines={4}
                onChangeText={setDescription}
              />
            </View>
            {/* <Text style={styles.label}> Images : </Text> */}
            <View style={styles.selectImagesContainer}>
              <TouchableOpacity
                style={styles.selectImagesButton}
                onPress={() => navigation.navigate("UploadImages")}
                disabled={imageUploaded.length > 0}
              >
                {imageUploaded.length == 0 ? (
                  <Entypo name="upload" size={24} color="black" />
                ) : (
                  <Entypo name="check" size={24} color="black" />
                )}
                <Text style={styles.selectImageText}>
                  {imageUploaded.length == 0
                    ? "Upload Images"
                    : "Done Uploading"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.subButton}>
          <TouchableOpacity onPress={handleRegistration}>
            <View style={styles.buttonContainer}>
              <Text style={styles.btnValue}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Toast />
      </ImageBackground>
    </View>
  );
};

export default PropertyRegisterScreen;

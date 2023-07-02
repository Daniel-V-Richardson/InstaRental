import { View, Text ,ImageBackground,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import Toast from "react-native-toast-message";
import React ,{useState} from 'react'
import {images} from '../../constants'
import {FontAwesome} from '@expo/vector-icons'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { getFirestore, getDocs,collection,query, where,addDoc } from "firebase/firestore";
import AnimatedLoader from "react-native-animated-loader";

import styles from './UserRegisterScreenStyle'

const UserRegister = ({navigation}) => {

  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  
  const handleRegistration =async () => {
    setIsLoading(true);
    const newData = {
      userName,
      emailAddress,
      password,
      location,
    };

    try {

      const emailExists = await isEmailRegistered(emailAddress);
      if (emailExists) {
          Toast.show({
            type: "error",
            text1: "You have Entered Mail is already in use",
            position: "top",
            visibilityTime: 4000,
          });
        setIsLoading(false);
        return;// Stop further execution
      }
      
    const isStrongPassword = checkPasswordStrength(password);
    if (!isStrongPassword) {
      // Display toast message for weak password
        Toast.show({
          type: "error",
          text1: "Passwords must contain 6 digits uppercase,lowercase and atleast 1 symbol ",
          position: "top",
          visibilityTime: 4000,
        });
        setIsLoading(false);
      return; // Stop further execution
    }

      // Create a Firestore instance
      const db = getFirestore();

      // Add the user data to a "users" collection
      const docRef = await addDoc(collection(db, "Users"), newData);

      // Get the newly created document ID
      const documentId = docRef.id;

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
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
  const isEmailRegistered = async (email) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(getFirestore(), "Users"), where("emailAddress", "==", email))
      );
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email registration: ", error);
      return false; // Assume email is not registered to allow data storage
    }
  };
  const checkPasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  

  return (
    <View>
    <ImageBackground
      source={images.propertyRegister}
      style={styles.backgroundImage}
    >
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Registering User information...</Text>
      </AnimatedLoader>
       <View style={styles.container}>
         <View style={styles.textHeader}>
          <Text style={styles.text}>
            Enter the user and property information
          </Text>
        </View>
        <Text style={styles.label}>User Name : </Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={23} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter User Name"
            placeholderTextColor="#777"
            onChangeText={setUserName}
          />
        </View>
        <Text style={styles.label}> Email Address : </Text>
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

        <Text style={styles.label}> Password : </Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={23} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password "
            placeholderTextColor="#777"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Text style={styles.label}> Location : </Text>
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


        <View style={styles.subButton}>
          <TouchableOpacity onPress={handleRegistration}>
            <View style={styles.buttonContainer}>
              <Text style={styles.btnValue}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.btnValue}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Toast /> 
    </ImageBackground>
  </View>
  )
}

export default UserRegister

import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Button
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { icon, images } from "../../constants";
import React, { useState,useEffect } from "react";
import styles from "./PropertyRegisterScreenStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {  getFirestore, getDocs,collection,query, where,addDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import Toast from "react-native-toast-message";
import AnimatedLoader from "react-native-animated-loader";

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

  const handleRegistration =async () => {
    setIsLoading(true);
    const newData = {
      userName,
      emailAddress,
      password,
      location,
      rent,
      advanceAmount,
      totalRooms,
      description,
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
      const docRef = await addDoc(collection(db, "Admin"), newData);
  
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


  const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
  const [image,setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
   })();

  }, [] );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      quality:1,
      multiple:true,
    });

    console.log(result);

    if(!result.canceled){
      setImage(result.uri);
    }
  };
  if(hasGalleryPermission === false){
    return <Text>No access to internal storage</Text>
  }

   const isEmailRegistered = async (email) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(getFirestore(), "Admin"), where("emailAddress", "==", email))
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
       <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
         <Text>Registering Home information...</Text>
      </AnimatedLoader>
      <ImageBackground
        source={images.propertyRegister}
      >
       <ScrollView scrollEnabled={true}>
         <View style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />
           <View style={styles.textHeader}>
            <Text style={styles.text}>
              Enter the user and property information
            </Text>
          </View>
          <Text style={styles.label}>User Name : </Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="#fff" style={styles.icon} />
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
            <FontAwesome name="lock" size={20} color="#fff" style={styles.icon} />
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

          <Text style={styles.label}> Rent : </Text>
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

          <Text style={styles.label}> Advance Amount : </Text>
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

          <Text style={styles.label}> Total Rooms : </Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="bed" size={20} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Number of Rooms "
              placeholderTextColor="#777"
              keyboardType="number-pad"
              onChangeText={setTotalRooms}
            />
          </View>
          <Text style={styles.label}> Description : </Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="pencil"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Features of the house"
              placeholderTextColor="#777"
              multiline={true}
              numberOfLines={4}
              onChangeText={setDescription}
            />
          </View>
          {/* <View>
              <Button title="Pick Image" onPress={()=> pickImage()} style={{marginTop:20,}} />
              {image && <Image source={{uri: image}} style={{flex:1/2}}/>}
          </View> */}
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
       </ScrollView>
       <Toast /> 
       </ImageBackground>
    </View>
  );
};

export default PropertyRegisterScreen;

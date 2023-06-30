import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { icon, images } from "../../constants";
import React, { useState } from "react";
import styles from "./PropertyRegisterScreenStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

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

  const handleRegistration = () => {
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
        // ..
      });
  };

  return (
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
          <FontAwesome name="user" size={20} color="#777" style={styles.icon} />
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
            color="#777"
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
          <FontAwesome name="lock" size={20} color="#777" style={styles.icon} />
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
            color="#777"
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
            color="#777"
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
            color="#777"
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
          <FontAwesome name="bed" size={20} color="#777" style={styles.icon} />
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
            color="#777"
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
  );
};

export default PropertyRegisterScreen;

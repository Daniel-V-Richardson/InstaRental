import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./ProfileScreenStyle";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import AnimatedLoader from "react-native-animated-loader";
import { collection, doc, getDoc } from "firebase/firestore";

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    const user = auth.currentUser;
    console.log(user.uid)
    if (user) {
      const uid = user.uid;
      const usersCollection = collection(db, "Users");
      const docRef = doc(usersCollection, uid);

      getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            setUserData(userData);
          } else {
            console.log("User data not found in Firestore");
          }
        })
        .catch((error) => {
          console.log("Error getting user data from Firestore: ", error);
        });
    } else {
      console.log("No user currently logged in");
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  const Logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // if (!userData) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Signing out Please wait...</Text>
      </AnimatedLoader>
      <Text style={styles.userHeader}>User</Text>
      <View style={styles.userInfoContainer}>
        <Image source={images.avatar} style={styles.userAvatar} />
        {userData ? (
          <>
            <Text style={styles.userName}>{userData.userName}</Text>
            <Text style={styles.userName}>{userData.emailAddress}</Text>
            <Text style={styles.userName}>{userData.location}</Text>
            {/* Other user data fields */}
          </>
        ) : (
          <Text style={styles.userName}>Loading user data...</Text>
        )}
        <Text style={styles.userName}>Male</Text>
        <TouchableOpacity style={styles.editUserButton}>
          <Text style={styles.editUserText}>Edit User Information</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionContainer}>
        <ScrollView>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>
              <Ionicons name="bookmark" size={24} color={"#000"} /> Saved
              Collection
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>
              <Ionicons name="lock-closed" size={24} color={"#000"} /> Terms and
              Service{" "}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>
              <Ionicons name="document-text" size={24} color={"#000"} /> Privacy
              Policy{" "}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>
              <Ionicons name="shield" size={24} color={"#000"} /> Community
              Guidelines{" "}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>
              <Ionicons name="help-circle" size={24} color={"#000"} /> Help{" "}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={Logout}>
            <Text style={styles.actionText}>
              <Ionicons name="log-out" size={24} color={"#f70723"} /> Log Out
            </Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text></Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" size={30} color={"#9b9e9e"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChatHome")}>
          <FontAwesome name="comments" size={30} color={"#9b9e9e"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <FontAwesome name="user" size={30} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

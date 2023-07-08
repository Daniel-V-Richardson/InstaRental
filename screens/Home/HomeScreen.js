import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
  Touchable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { image } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./HomeScreenStyle";
import ChatHome from "./Chat/ChatHomeScreen";
import Profile from "../Profile/ProfileScreen";
import ProfileScreen from "../Profile/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import AnimatedLoader from "react-native-animated-loader";
import { signOut } from "firebase/auth";

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);
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
      setIsLoading(false);
  };
  // const navigation = useNavigation();
  const backPressedRef = useRef(0);

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButton
      );

      return () => backHandler.remove(); // Remove the event listener on component unmount
    }, [])
  );

  const handleBackButton = () => {
    if (backPressedRef.current && backPressedRef.current > 0) {
      // Close the app if back button is pressed twice within 2 seconds
      BackHandler.exitApp();
      return true;
    }

    backPressedRef.current = 1;
    Toast.show({
      type: "info",
      text1: "Press back again to exit",
      position: "bottom",
      visibilityTime: 2000,
    });

    setTimeout(() => {
      backPressedRef.current = 0;
    }, 2000);

    return true;
  };

  const renderStars = (count) => {
    const ratings = [];
    for (let i = 0; i < count; i++) {
      ratings.push(<FontAwesome key={i} name="star" size={20} color="gold" />);
    }
    return ratings;
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = auth.currentUser;
      const uid = user.uid;
      const userCollection = collection(db, "Users");
      const docRef = doc(userCollection, uid);

      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setcurrentUser(userData);
        } else {
          console.log("User data not found in Firestore");
        }
      });
    };

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Owners"));
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      setData(dataArray);
    };
    fetchData();
    fetchCurrentUser();
  }, []);

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
      <View style={styles.headerContainer}>
        {currentUser ? (
          <Text style={styles.welcomeText}>
            Welcome <Text style={styles.user}>{currentUser.userName}</Text>{" "}
          </Text>
        ) : (
          <Text style={styles.welcomeText}>Welcome</Text>
        )}
        <AntDesign
          onPress={Logout}
          style={styles.logout}
          name="logout"
          size={30}
          color="white"
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search the location "
            placeholderTextColor="#777"
          />
          <TouchableOpacity key={data.uid} onPress={() => {}}>
            <FontAwesome
              name="search"
              size={20}
              color="#777"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Harizantol scroll view in top selling houses*/}

          <View style={styles.rowCard}>
            <Text style={styles.rowHeader}>Top Selling</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.map((item) => (
                <View style={styles.card}>
                  <TouchableOpacity
                    key={item.uid}
                    onPress={() =>
                      navigation.navigate("Details", { uid: item.uid })
                    }
                  >
                    <Image
                      source={{ uri: item.imageUploaded[0] }}
                      style={styles.backgroundImage}
                    />
                  </TouchableOpacity>
                  <View style={styles.overlay}>
                    <View style={styles.detailsTopContainer}>
                      <Text style={styles.locationText}>{item.location}</Text>
                      <FontAwesome name="bookmark-o" size={20} color="white" />
                    </View>
                    <View style={styles.detailsContainer}>
                      <View style={styles.starsContainer}>
                        {renderStars(item.ratings)}
                        <Text style={styles.starsText}>{item.stars}</Text>
                      </View>
                      <Text style={styles.rentText}>
                        Rent:{" "}
                        <FontAwesome5
                          name="rupee-sign"
                          size={14}
                          color="white"
                        />
                        {item.rent}/month
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Based on your search vertical scroll view*/}

          <Text style={styles.columnHeader}>Based on your Location</Text>
          <View style={styles.searchRowContainer}>
            {data.map((item) => (
              <View key={item.uid} style={styles.columnCard}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", { uid: item.uid })
                  }
                >
                  <Image
                    source={{ uri: item.imageUploaded[2] }}
                    style={styles.searchImage}
                  />
                </TouchableOpacity>
                <View style={styles.columnOverlay}>
                  <View style={styles.userContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("AgentProfile", { uid: item.uid })
                      }
                    >
                      <Image
                        source={{ uri: item.imageUploaded[1] }}
                        style={styles.avatar}
                      />
                    </TouchableOpacity>
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>{item.userName}</Text>
                      <Text style={styles.location}>{item.location}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.bottom}>
            <Text></Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" size={30} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChatHome")}>
          <FontAwesome name="comments" size={30} color={"#9b9e9e"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <FontAwesome name="user" size={30} color={"#9b9e9e"} />
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default HomePage;

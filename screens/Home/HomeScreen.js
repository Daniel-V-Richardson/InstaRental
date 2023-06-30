import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { image } from "../../constants";
import React, { useEffect, useRef } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import styles from "./HomeScreenStyle";

const topSelling = [
  {
    id: 1,
    imageSource: require("../../assets/images/home_row1.jpeg"),
    location: "Thoothukudi",
    stars: 4,
    rent: 2500,
  },
  {
    id: 2,
    imageSource: require("../../assets/images/home_row2.jpeg"),
    location: "Chennai",
    stars: 5,
    rent: 4000,
  },
  {
    id: 3,
    imageSource: require("../../assets/images/home_row3.jpeg"),
    location: "Madurai",
    stars: 3,
    rent: 2000,
  },
  {
    id: 4,
    imageSource: require("../../assets/images/home_row4.jpeg"),
    location: "Tirunelveli",
    stars: 5,
    rent: 3500,
  },
  {
    id: 5,
    imageSource: require("../../assets/images/home_row1.jpeg"),
    location: "Thoothukudi",
    stars: 5,
    rent: 5000,
  },
];

const basedOnSearch = [
  {
    id: 1,
    imageSource: require("../../assets/images/home_row1.jpeg"),
    title: "",
    description: "",
    avatar: require("../../assets/images/avatar.png"),
    userName: "Arun",
    location: "Thoothukudi",
  },
  {
    id: 2,
    imageSource: require("../../assets/images/home_row2.jpeg"),
    title: "",
    description: "",
    avatar: require("../../assets/images/avatar.png"),
    userName: "Richardson",
    location: "Chennai",
  },
  {
    id: 3,
    imageSource: require("../../assets/images/home_row3.jpeg"),
    title: "",
    description: "",
    avatar: require("../../assets/images/avatar.png"),
    userName: "Daniel",
    location: "Madurai",
  },
  {
    id: 4,
    imageSource: require("../../assets/images/home_row4.jpeg"),
    title: "",
    description: "",
    avatar: require("../../assets/images/avatar.png"),
    userName: "Ak",
    location: "Coimbatore",
  },
];
const HomePage = ({ navigation }) => {
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
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<FontAwesome key={i} name="star" size={20} color="gold" />);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerComponent}> Home</Text>
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search the location "
            placeholderTextColor="#777"
          />
          <TouchableOpacity key={topSelling.id} onPress={() => {}}>
            <FontAwesome
              name="search"
              size={20}
              color="#777"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Harizantol scroll view in top selling houses*/}

        <View style={styles.rowCard}>
          <Text style={styles.rowHeader}>Top Selling</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topSelling.map((item) => (
              <View style={styles.card}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigation.navigate("Details")}
                >
                  <Image
                    source={item.imageSource}
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
                      {renderStars(item.stars)}
                      <Text style={styles.starsText}>{item.stars}</Text>
                    </View>
                    <Text style={styles.rentText}>
                      Rent:{" "}
                      <FontAwesome5 name="rupee-sign" size={14} color="white" />
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
          {basedOnSearch.map((item) => (
            <View key={item.id} style={styles.columnCard}>
              <Image source={item.imageSource} style={styles.searchImage} />

              <View style={styles.columnOverlay}>
                <View style={styles.userContainer}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default HomePage;

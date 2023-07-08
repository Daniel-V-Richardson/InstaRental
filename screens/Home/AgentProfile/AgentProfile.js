import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { icons, images } from "../../../constants";
// import {Fontawesome} from '@expo/vector-icons'
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import styles from "./AgentProfileStyle";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const AgentProfile = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { uid } = route.params;

    const fetchData = async () => {
      const docRef = doc(collection(db, "Owners"), uid);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      }
    };
    fetchData();
    setIsLoading(false);
  }, [route.params]);
  const truncatedLocation =
    data?.location.length > 20
      ? `${data.location.substring(0, 40)}...`
      : data?.location;

  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backBtn}
            resizeMode="cover"
            source={icons.back}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Agent Profile</Text>
      </View>
      <View style={styles.mainCardView}>
        <View style={styles.userInfoContainer}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={{ width: "75%" }}>
            <Text style={styles.userName}>{data?.userName}</Text>
            <Text style={styles.location}> {truncatedLocation}</Text>
          </View>
        </View>
        <View style={styles.houseCardInfo}>
          <View style={styles.card}>
            <Text style={styles.houseCardText}>15 Houses</Text>
            <Text style={styles.houseCardSubText}>Uploaded</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.houseCardText}>10 Houses</Text>
            <Text style={styles.houseCardSubText}>Sold</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.houseCardText}>5 Houses</Text>
            <Text style={styles.houseCardSubText}>On Proccess</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.houseCard}>
            <View style={styles.houseRow}>
              <View style={styles.homeDetails}>
                <Image
                  source={{ uri: data?.imageUploaded[0] }}
                  style={styles.houseCardImage}
                />
                <Text style={styles.homeRent}>
                  Rent :{" "}
                  <FontAwesome5 name="rupee-sign" size={14} color="#000" />
                  {data?.rent} / month
                </Text>
                <Text style={styles.homeLocation}>Thoothukudi</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text></Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatContainer}
        >
          <Text style={styles.chatText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgentProfile;

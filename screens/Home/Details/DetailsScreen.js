import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FONT, icons, images } from "../../../constants";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./DetailsScreenStyle";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import AnimatedLoader from "react-native-animated-loader";
import { Ionicons } from "@expo/vector-icons";

export default function DetailsScreen({ navigation, route }) {
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

  // if (!data) {
  // }

  const truncatedLocation =
    data?.location.length > 20
      ? `${data.location.substring(0, 20)}...`
      : data?.location;
  // const images = data.imageUploaded || [];

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(0,0,0,0.5)"
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text style={{ color: "white", fontFamily: FONT.black }}>
          Loading Property information...
        </Text>
      </AnimatedLoader>
      <View style={styles.topContainer}>
        <View style={styles.textHeader}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons
              style={styles.backBtn}
              name="arrow-back"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: data?.imageUploaded[0] }}
          style={styles.backgroundImage}
        ></Image>
        <View style={styles.userContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AgentProfile", { uid: data.uid })
            }
          >
            <Image source={images.avatar} style={styles.avatar} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{data?.userName}</Text>
            <Text style={styles.location}>{truncatedLocation}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <FontAwesome
              name="comments"
              size={30}
              color="#fff"
              style={styles.chatIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.firstContainer}>
            <FontAwesome
              name="bed"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.iconText}>{data?.totalRooms}</Text>
          </View>
          <View style={styles.firstContainer}>
            <FontAwesome
              name="dollar"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.iconText}>{data?.advanceAmount} </Text>
          </View>
          <View style={styles.firstContainer}>
            <FontAwesome
              name="money"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.iconText}>{data?.rent}</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionContent}>{data?.description}</Text>
        </View>
        <Text style={styles.galleryHeader}>Photo Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imagesContainer}>
            {data?.imageUploaded.map((imageUrl, index) => (
              <Image
                key={index}
                source={{ uri: imageUrl }}
                style={styles.slideshowImage}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

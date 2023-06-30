import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { images } from "../../../constants";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./DetailsScreenStyle";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={images.home_row1} style={styles.backgroundImage}></Image>
        <View style={styles.userContainer}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Arun</Text>
            <Text style={styles.location}>Thoohthukudi</Text>
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
            <Text style={styles.iconText}>3 Rooms</Text>
          </View>
          <View style={styles.firstContainer}>
            <FontAwesome
              name="dollar"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Advance </Text>
          </View>
          <View style={styles.firstContainer}>
            <FontAwesome
              name="money"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Rent</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionContent}>
            Available for free wifi,water supply available and nearby
            hospital,school,park and Theater and there is in main city of this
            area and blaw blaw blaw
          </Text>
        </View>
        <Text style={styles.galleryHeader}>Photo Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imagesContainer}>
            <Image source={images.home_row1} style={styles.slideshowImage} />
            <Image source={images.home_row2} style={styles.slideshowImage} />
            <Image source={images.home_row3} style={styles.slideshowImage} />
            <Image source={images.home_row4} style={styles.slideshowImage} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./UploadImageComponentStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FONT, icons } from "../constants";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebaseConfig";
import { enableLogging } from "firebase/storage";
import AnimatedLoader from "react-native-animated-loader";

export default function UploadImageComponent({ navigation }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pickImages = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Please provide Storage Permission to the App");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
      });
      if (!result.canceled && result?.assets?.length > 0) {
        setImages(result.assets);
      }
    } catch (error) {
      console.error("Error selecting images: ", error);
    }
  };
  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  const uploadImages = async () => {
    setIsLoading(true);
    try {
      const imageUrls = [];
      const promises = images.map(async (image) => {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const imageName = `${uuidv4()}.jpg`;

        const storageRef = ref(storage, `properties/${imageName}`);
        await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
        console.log(imageUrls);
      });

      await Promise.all(promises);
      // const imageUploaded = true;
      setIsLoading(false);
      navigation.navigate("propertyOwnerRegister", {
        imageUrls,
        // imageUploaded,
      });
    } catch (error) {
      console.error("Error uploading images: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="rgba(8, 8, 8, 0.5)"
        animationStyle={styles.lottie}
        speed={0.8}
      >
        <Text style={{ fontFamily: FONT.black, color: "white", fontSize: 16 }}>
          Uploading Images Please wait...
        </Text>
      </AnimatedLoader>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.navigate("propertyOwnerRegister")}
        >
          <Image
            style={styles.backBtn}
            resizeMode="cover"
            source={icons.back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Image Picker</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          borderRadius: 30,
          gap: 20,
        }}
      >
        {images.map((image, index) => (
          <ImageBackground
            key={index}
            source={{ uri: image.uri }}
            style={{
              width: 350,
              height: 350,
              borderRadius: 20,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => deleteImage(index)}
              style={{ borderRadius: 20 }}
            >
              <MaterialCommunityIcons
                name="delete-circle-outline"
                size={54}
                color="red"
                style={{
                  textAlign: "right",
                  fontFamily: FONT.black,
                  marginTop: "80%",
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={pickImages}
        style={{
          width: "80%",
          backgroundColor: "black",
          marginBottom: 10,
          padding: 20,
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontFamily: FONT.black,
            color: "white",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Select images from gallery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={uploadImages}
        style={{
          width: "80%",
          backgroundColor: "#50ED6A",
          marginBottom: 10,
          padding: 20,
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontFamily: FONT.black,
            color: "black",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Upload Images
        </Text>
      </TouchableOpacity>
    </View>
  );
}

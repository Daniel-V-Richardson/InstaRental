import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { icons, images } from "../../constants";
import styles from "./GetstartedScreenStyle";

export default function GetStarted({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={images.getStartedBackground}
          resizeMode="cover"
          style={styles.image}
        >
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => navigation.navigate("InitialScreen")}
          >
            <Image
              style={styles.backBtn}
              resizeMode="cover"
              source={icons.back}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.text}>What are you Looking for ?</Text>
        <Text
          style={styles.showcaseBtn}
          onPress={() => navigation.navigate("propertyOwnerRegister")}
        >
          Showcase your property
        </Text>
        <Text style={styles.rentBtn}>Rent a property</Text>
      </View>
    </View>
  );
}

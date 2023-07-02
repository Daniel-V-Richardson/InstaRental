import { View, TouchableOpacity } from "react-native";
import styles from "./NavbarStyle";
import { FontAwesome } from "@expo/vector-icons";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
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
export default Navbar;

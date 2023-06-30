import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 230,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(194, 190, 190, 0.8)",
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: "center",
  },
  buttonContainer: {
    top: -20,
    width: 180,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btnValue: {
    color: "white",
    fontSize: 20,
    fontFamily: FONT.bold,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  line: {
    flex: 1,
    height: 1.2,
    width: 6,
    backgroundColor: "black",
  },
  signIn: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: FONT.bold,
    color: "black",
  },
  socialMediaIcons: {
    flexDirection: "row",
    gap: 50,
    alignItems: "space-between",
    justifyContent: "center",
  },

  meta_logo: {
    width: 55,
    alignItems: "center",
    height: 55,
  },
  google_logo: {
    top: 5,
    width: 64,
    height: 64,
  },
  apple_logo: {
    width: 60,
    height: 60,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 35,
  },
  text: {
    fontSize: 16,
    top: 2,
    fontFamily: FONT.bold,
  },
  login: {
    fontFamily: FONT.bold,
    fontSize: 18,
    color: "blue",
    fontWeight: 600,
  },
});

export default styles;

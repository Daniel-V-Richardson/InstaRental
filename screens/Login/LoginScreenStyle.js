import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

// import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputArea: {
    marginTop: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backContainer: {
    top: 40,
    left: 20,
    width: 50,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FAEBEB",
    height: 50,
  },
  backBtn: {
    height: "60%",
    width: "60%",
  },
  input: {
    width: 300,
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingLeft: 15,
    marginLeft: 10,
  },
  textHeader: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    fontFamily: FONT.bold,
  },
  heading: {
    fontSize: 25,
    fontFamily: FONT.black,
    marginBottom: 10,
  },

  label: {
    top: 20,
    color: "#000",
    fontFamily: FONT.bold,
    marginBottom: 15,
    marginLeft: 10,
    fontSize: 18,
  },
  icon: {
    color: "#000",
  },
  buttonContainer: {
    width: 180,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  btnValue: {
    color: "white",
    fontSize: 20,
    fontFamily: FONT.bold,
  },
  subButton: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  loginContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "55%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "rgba(194, 190, 190, 0.8)",
    blurRadius: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  newToText: {
    fontFamily: FONT.bold,
    fontSize:15,
    marginTop:20,
  },
  registerText: {
    color: '#004CF0',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default styles;

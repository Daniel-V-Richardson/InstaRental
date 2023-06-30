import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

// import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    fontSize: 21,
    fontFamily: FONT.bold,
    marginBottom: 10,
  },
  label: {
    top: 20,
    color: "#000",
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
    justifyContent: "center",
  },
  btnValue: {
    color: "white",
    fontSize: 20,
    fontFamily: FONT.bold,
  },
  subButton: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  backButton: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  loginContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 450,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(194, 190, 190, 0.8)",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default styles;

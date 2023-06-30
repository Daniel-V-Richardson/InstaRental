import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 517.4,
    overflow: "hidden",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backContainer: {
    top: 40,
    left: 20,
    width: 50,
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
  mainContent: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    marginBottom: 30,
    fontFamily: FONT.black,
    fontSize: 25,
  },

  showcaseBtn: {
    color: "white",
    margin: 10,
    fontSize: 20,
    width: 347,
    height: 66,
    fontFamily: FONT.bold,
    borderRadius: 30,
    textAlign: "center",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
  rentBtn: {
    color: "white",
    margin: 10,
    fontSize: 20,
    fontFamily: FONT.bold,
    width: 347,
    height: 66,
    borderRadius: 30,
    textAlign: "center",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
});

export default styles;

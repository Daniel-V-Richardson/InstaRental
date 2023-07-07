import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

// import { COLORS, FONT, SIZES } from "../../../constants";

const Styles = StyleSheet.create({
  container: {
    // margin: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  icon: {
    color: "black",
    marginRight: 10,
  },

  input: {
    width: 250,
    fontSize: 16,
  },
  backgroundImage: {
    resizeMode: "contain",
    width:'100%',
    height:'100%',
    justifyContent: "center",
  },
  textHeader: {
    backgroundColor:'black',
    padding:20,
    borderBottomStartRadius:40,
    borderBottomEndRadius:40,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 25,
    textAlign:'center',
    justifyContent:'center',
    marginTop:20,
    fontFamily: FONT.black,
    color: "#fff",
  },
  backContainer: {
    marginTop:20,
    marginRight:20,
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
  scrollView: {
    marginTop:20,
    width: "100%",
    height: "100%",
  },
  label: {
    marginBottom: 10,
    fontSize: 21,
    color: "#fff",
    fontFamily:FONT.black
  },
  buttonContainer: {
    width: 350,
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  btnValue: {
    color: "white",
    fontSize: 21,
    fontFamily: FONT.black,
  },
  subButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  selectImagesContainer: {
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
  },
  selectImagesButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    marginTop: 20,
    height: "20%",
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
    resizeMode: "contain",
    width: 100,
  },
  selectImageText: {
    fontFamily: FONT.black,
    fontSize: 16,
  },
});

export default Styles;

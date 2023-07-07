import { StyleSheet } from "react-native";
import { FONT } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  lottie: {
    width: 100,
    height: 100,
  },
  buttonGroup:{
    backgroundColor:'black',
    padding:20,
    borderBottomStartRadius:40,
    borderBottomEndRadius:40,
    flexDirection: "row",
    alignItems: "center",
  },
  title:{
    textAlign:'center',
    fontFamily:FONT.black,
    marginTop:40,
    color:'white',
    fontSize:25
  },
  backContainer: {
    marginTop: 40,
    marginRight: 20,
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
    width: "100%",
    height: "100%",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});

export default styles;

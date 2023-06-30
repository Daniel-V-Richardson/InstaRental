import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants";

// import { COLORS, FONT, SIZES } from "../../../constants";

const Styles = StyleSheet.create({
  container: {
    margin:30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  input: {
    width: 300,
    height: 50,
    fontSize:16,
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingLeft: 15,
    marginLeft:10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader:{
    marginTop: 30,
    fontFamily:FONT.bold
  },
  text:{
    fontSize:21,
    fontFamily:FONT.bold,
    marginBottom:10,
  },
  label:{
    top: 10,
    marginBottom:10,
    fontSize:18,
  },
  buttonContainer: {
    width: 180,
    padding:10,
    backgroundColor: "#000",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btnValue: {
    color: "white",
    fontSize: 20,
    fontFamily:FONT.bold,
  },
  subButton:{
    alignItems:'center',
    marginTop:30,
    marginBottom:20,
  },
  backButton:{
    alignItems:'center',
    marginBottom:20,
  }
 });

export default Styles;

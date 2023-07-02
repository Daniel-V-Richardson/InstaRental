import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
       marginTop:10,
       marginLeft:20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
    
      input: {
        position:'absolute',
        height: 50,
        width:300,
        fontSize:16,
        borderWidth: 1,
        borderColor: '#777',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginLeft:30,
        paddingLeft:10
      },
      backgroundImage: {
        resizeMode: "contain",
        justifyContent: "center",
        height:'100%',
      },
      textHeader:{
        marginTop: 30,
        fontWeight:'bold'
      },
      text:{
        fontSize:21,
        fontWeight:'bold',
        marginBottom:10,
        color:'#fff'
      },
      label:{
        top: 10,
        marginBottom:30,
        marginTop:20,
        marginLeft:25,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
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
        fontWeight:'bold'
      },
      subButton:{
        alignItems:'center',
        marginTop:40,
        marginBottom:30,
      },
      backButton:{
        alignItems:'center',
        marginBottom:20,
      },
      lottie: {
        width: 100,
        height: 100,
      },
     });
    

export default Styles;
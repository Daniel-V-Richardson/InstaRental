import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        // alignItems:'center',
    },
    textHeader: {
        backgroundColor:'black',
        padding:20,
        height:'12%',
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
    mainCardView:{
        backgroundColor:'#fff',
        width:'100%',
        height:'95%',
        alignSelf:'center',
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        margin:10
    } ,
    userInfoContainer:{
        margin:15,
        marginTop:20,
        flexDirection:'row'
    },
    avatar:{
        height:120,
        width:120,
    },
    userName:{
        marginTop:35,
        marginLeft:30,
        fontWeight:'bold',
        fontSize:20
    },
    location:{
        marginTop:3,
        marginLeft:25,
        fontSize:18,
        color:'#9b9e9e'
    },
    houseCardInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        marginTop:20,
    },
    card:{
        backgroundColor:'#000',
        width:110,
        height:70,
        borderRadius:18,
        alignItems:'center'
    },
    houseCardText:{
        color:'#fff',
        margin:10,
        fontSize:16,
    },
    houseCardSubText:{
        color:'#9b9e9e'
    },
    houseCardImage:{
        height:180,
        width:180,
        justifyContent:'space-between',
        borderRadius:10,
    },
    houseCard:{
        marginBottom:25,
    },
    houseRow:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        gap:10,
    },
    chatContainer:{
        position:'absolute',
        backgroundColor:'#000',
        width:'80%',
        borderRadius:27,
        alignItems:'center',
        top:'83%',
        marginLeft:'10%',
        marginRight:'10%'
    },
    chatText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:13,
    },
    homeDetails:{
        flexDirection:'column',
        marginTop:5
    },
    homeRent:{
        marginLeft:10,
    },
    homeLocation:{
        marginLeft:10,
    },
    bottom:{
        marginTop:100,
    }

})

export default styles;
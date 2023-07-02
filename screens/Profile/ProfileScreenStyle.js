import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#f0eded',
      },
      userHeader:{
        color:'#000',
        marginTop:20,
        fontSize:24,
        fontWeight:'bold'
      },
      userInfoContainer:{
         flexDirection:'column',
         backgroundColor:'#000',
         borderRadius:30,
         width:'100%',
         height: '45%',
         alignItems:'center',
         marginTop:20,
      },
      userAvatar:{
         margin: 20,
         height:140,
         width:140,
         borderRadius:50
      },
      userName:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginTop:6,
      },
      editUserButton:{
        backgroundColor:'#fff',
        width:"80%",
        alignItems:'center',
        borderRadius:25,
        marginTop:'2%'
      },
      editUserText:{
        marginBottom:10,
        marginTop:10,
        fontSize:18,
        fontWeight:'bold'
      },
      actionContainer:{
         marginTop:20,
         backgroundColor:'#000',
         borderRadius:30,
         width:'100%',
         height:'43%',
         overflow:'hidden'
      },
      action:{
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:27,
      },
      actionText:{
        fontSize:18,
        fontWeight:'bold',
        margin:13

      },
      icon:{
        marginTop:10,
        position:'absolute',
        marginLeft:'87%'
      },
      bottom:{
        marginTop:40
      },
      navbar:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        backgroundColor:"#000",
        bottom:10,
        paddingLeft:45,
        paddingRight:45,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:30
      },
})

export default styles;
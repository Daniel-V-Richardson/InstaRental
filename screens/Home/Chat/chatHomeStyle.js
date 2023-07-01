import { StyleSheet } from "react-native";

const Styles =StyleSheet.create({
    container:{
        backgroundColor:'#000',
        alignItems:'center'
    },
    title:{
        color:"#fff",
        marginTop:50,
        fontSize:25,
        alignItems:'center',
        fontWeight:'bold'
    },
    chatContainerTitle:{
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'
    },
    chatUserContainer:{
        paddingTop:10,
        marginTop:30,
        backgroundColor:'#fff',
        height:'90%',
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    userInfoContainer:{
        flexDirection:'row',
    },
    avatar:{
        margin:15,
        marginLeft:25,
        borderRadius:50,
        height:60,
        width:60,
    },
    userName:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:10
    },
    time:{
        position:'absolute',
        marginLeft:'85%',
        marginTop:45
    },
    chatText:{
        color:'#9b9e9e',
        marginLeft:15,
    },
    bottom:{
        marginTop:120,
    },
    navbar:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        backgroundColor:"#000",
        bottom:'4%',
        paddingLeft:45,
        paddingRight:45,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:30
      },

})

export default Styles;
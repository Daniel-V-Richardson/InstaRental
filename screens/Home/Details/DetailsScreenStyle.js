import { StyleSheet, Dimensions } from "react-native";
import {FONT} from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#d1d0cd'
  },
  topContainer:{
    height:'50%',
    alignItems:'center'
  },
  backgroundImage:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    width:'100%',
  },
  userContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#000",
    color:'#fff',
    position:'absolute',
    width:'70%',
    height:80,
    bottom:-35,
    borderRadius:30,
    paddingLeft:30,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 15,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
    paddingLeft:15,
    
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 14,
    paddingTop:5,
    color: '#fff',
  },
  chatIcon:{
    marginLeft:30,
  },
  bottomContainer:{
    flex:1,
    width:"95%",
    backgroundColor:'#fff',
    marginTop:50,
    borderTopLeftRadius:27,
    borderTopRightRadius:27,
    marginLeft:"2.5%",
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:40,
    alignItems:'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  firstContainer:{
    backgroundColor:'#e3e3e3',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    height:80,
    width:80,
  },
  iconText:{
    fontSize:16,
  },
  descriptionContainer:{
    margin:15,
  },
  descriptionHeader:{
    fontSize:22,
    fontStyle:FONT.bold
  },
  descriptionContent:{
    fontSize:16,
    marginTop:8,
    color:'#ababab'
  },
  imagesContainer:{
    margin:10,
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10,
  },
  slideshowImage:{
    height:120,
    width:120,
    borderRadius:20,
  },
  galleryHeader:{
    fontSize:22,
    fontStyle:FONT.bold,
    marginLeft:15
  },
})

export default styles;
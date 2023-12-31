import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  headerContainer: {
    backgroundColor:'black',
    padding:20,
    height:'12%',
    flexDirection: "row",
    justifyContent:'space-around'
  },
  mainContainer:{
    backgroundColor:'#fff',
        width:'100%',
        height:'90%',
        alignSelf:'center',
        
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        margin:10
  },
  welcomeText: {
    fontFamily: FONT.black,
    marginTop: 20,
    fontSize: 24,
    color: "white",
  },
  user: {
    color: "skyblue",
  },
  logout:{    
    alignSelf:'center',
    marginTop:20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 20,
    marginLeft: 10,
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
  icon: {
    marginLeft: 10,
    marginRight: 10,
    color: "#000",
  },
  card: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  overlay: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  locationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  rentText: {
    color: "white",
    fontSize: 16,
    marginRight: 5,
  },
  rowHeader: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  columnHeader: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  detailsTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
  },

  searchRowContainer: {
    alignItems: "center",
  },
  columnCard: {
    height: 300,
    width: "90%",
    marginVertical: 30,
    borderRadius: 20,
  },
  searchImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  columnOverlay: {
    position: "absolute",
    bottom: -30,
    left: 50,
    right: 0,
    backgroundColor: "white",
    padding: 10,
    width: 250,
    borderRadius: 25,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 15,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "column",
    width: "75%",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "black",
    fontSize: 14,
  },
  navbar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    backgroundColor: "#000",
    bottom: 10,
    alignSelf: "center",
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30,
  },
  bottom: {
    marginTop: 60,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default styles;

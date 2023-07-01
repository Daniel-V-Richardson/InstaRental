import {View,Text,TouchableOpacity,Image,ScrollView} from 'react-native'; 
import {images} from '../../../constants'
// import {Fontawesome} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import styles from './AgentProfileStyle'

const AgentProfile = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>AgentDetails Page</Text>

            <View style={styles.mainCardView}>
                <View style={styles.userInfoContainer}>
                    <Image source={images.avatar} style={styles.avatar}/>
                    <View >
                        <Text style={styles.userName}>Arun AK</Text>
                        <Text style={styles.location}> Thoothukudi</Text>
                    </View>
                </View>
                <View style={styles.houseCardInfo}>
                    <View style={styles.card}>
                        <Text style={styles.houseCardText}>15 Houses</Text>
                        <Text style={styles.houseCardSubText}>Uploaded</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.houseCardText}>10 Houses</Text>
                        <Text style={styles.houseCardSubText}>Sold</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.houseCardText}>5 Houses</Text>
                        <Text style={styles.houseCardSubText}>On Proccess</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.houseCard}>
                        <View style={styles.houseRow}>
                            <View style={styles.homeDetails}>
                                <Image source={images.home_row1} style={styles.houseCardImage}/>
                                <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                                <Text style={styles.homeLocation}>Thoothukudi</Text>
                            </View>
                            <View style={styles.homeDetails}>
                              <Image source={images.home_row2} style={styles.houseCardImage}/>
                              <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                              <Text style={styles.homeLocation}>Thoothukudi</Text>
                            </View>
                        </View>
        
                        <View style={styles.houseRow}> 
                            <View style={styles.homeDetails}> 
                               <Image source={images.home_row3} style={styles.houseCardImage}/> 
                               <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                               <Text style={styles.homeLocation}>Thoothukudi</Text>                          
                            </View>
                            <View style={styles.homeDetails}>
                               <Image source={images.home_row4} style={styles.houseCardImage}/>
                               <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                               <Text style={styles.homeLocation}>Thoothukudi</Text>
                            </View>
                        </View>
                        <View style={styles.houseRow}>
                           <View style={styles.homeDetails}>
                               <Image source={images.home_row1} style={styles.houseCardImage}/>
                               <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                                <Text style={styles.homeLocation}>Thoothukudi</Text>
                           </View>
                           <View style={styles.homeDetails}>
                             <Image source={images.home_row2} style={styles.houseCardImage}/>
                             <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                             <Text style={styles.homeLocation}>Thoothukudi</Text>
                           </View>
                        </View>
                        <View style={styles.houseRow}> 
                            <View style={styles.homeDetails}>
                                <Image source={images.home_row3} style={styles.houseCardImage}/>
                                <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                                <Text style={styles.homeLocation}>Thoothukudi</Text>
                            </View>
                            <View style={styles.homeDetails}>
                                <Image source={images.home_row4} style={styles.houseCardImage}/>
                                <Text style={styles.homeRent}>Rent : <FontAwesome5 name="rupee-sign" size={14} color="#000"  />5000 / month</Text>
                                <Text style={styles.homeLocation}>Thoothukudi</Text>
                            </View>
                       </View>
                                
                    </View>
                    <View style={styles.bottom}>
                        <Text></Text>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate("Chat")} style={styles.chatContainer}>
                    <Text style={styles.chatText}>Start Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AgentProfile;
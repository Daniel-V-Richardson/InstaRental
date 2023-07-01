import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
  } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import {images} from '../../constants' ;
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from './profileStyle'

  const Profile=({navigation}) => {
      const Stack = createNativeStackNavigator();
    return (
      <View style={styles.container}>
         <Text style={styles.userHeader}>User Name</Text>

            <View style={styles.userInfoContainer}>
                <Image source={images.avatar} style={styles.userAvatar} />
                <Text style={styles.userName}>User Name</Text>
                <Text style={styles.userName}>exapmle@gmail.com</Text>
                <Text style={styles.userName}>Thoothukudi</Text>
                <Text style={styles.userName}>Male</Text>
                <TouchableOpacity style={styles.editUserButton}>
                   <Text style={styles.editUserText}>Edit User Information</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actionContainer}>
              <ScrollView>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="bookmark" size={24} color={'#000'} />{' '}  Saved Collection</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={'#000'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="lock-closed" size={24} color={'#000'} />{' '}  Terms and Service </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={'#000'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="document-text" size={24} color={'#000'} />{' '}  Privacy Policy </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={'#000'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="shield" size={24} color={'#000'} />{' '}  Community Guidelines </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={'#000'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="help-circle" size={24} color={'#000'} />  Help  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={'#000'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Text style={styles.actionText}>
                    <Ionicons name="log-out" size={24} color={'#f70723'} />  Log Out
                  </Text>
                </TouchableOpacity>
                <View style={styles.bottom}><Text></Text></View>
              </ScrollView>
            </View>
          
         
         <View style={styles.navbar}>
              <TouchableOpacity  onPress={()=> navigation.navigate("Home")}>
                    <FontAwesome name='home' size={30} color={'#9b9e9e'} />
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>navigation.navigate("ChatHome")}>
                    <FontAwesome name='comments' size={30} color={'#9b9e9e'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("ProfilePage")}>
                    <FontAwesome name='user' size={30} color={'#fff'} />
              </TouchableOpacity>
          </View>
      </View>
    );
  }

  export default Profile;
  
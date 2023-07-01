import {View,Text,ScrollView,TouchableOpacity,Image} from 'react-native'
import {images} from '../../../constants'
import styles from './ChatHomeStyle'
import {FontAwesome} from '@expo/vector-icons'

const ChatHome = ({navigation}) => {
 return(
    <View style={styles.container}>
        <Text style={styles.title}>Chat Page</Text>
        <View style={styles.chatUserContainer}>
            <Text style={styles.chatContainerTitle}>Your Chats</Text>
            <ScrollView>
                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate("Chat")}>
                    <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
                        <Image source={images.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}> Arun AK</Text>
                        <Text style={styles.chatText}>hello</Text>
                    </View>
                    <Text style={styles.time}>12:50</Text>
                </TouchableOpacity>

            </ScrollView>
            <View style={styles.bottom}>
                <Text></Text>
            </View>
        </View>
        <View style={styles.navbar}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                      <FontAwesome name='home' size={30} color={'#9b9e9e'} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate("ChatHome")}>
                      <FontAwesome name='comments' size={30} color={'#fff'} />
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('ProfilePage')}>
                      <FontAwesome name='user' size={30} color={'#9b9e9e'} />
                </TouchableOpacity>
        </View>
    </View>
 );
}

export default ChatHome;
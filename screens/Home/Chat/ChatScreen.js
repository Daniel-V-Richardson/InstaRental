import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Voice from "react-native-voice";
import {images } from '../../../constants'
import styles from "./ChatScreenStyle";
// import { ScrollView } from "react-native-web";

const ChatScreen = ({navigation}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Send the message via MMS or any other method
      sendMessageToRecipient(newMessage);
    }
  };

  const handleVoiceStart = async () => {
    try {
      setIsRecording(true);
      await Voice.start("en-US");
    } catch (error) {
      console.log(error);
    }
  };

  const handleVoiceEnd = async () => {
    try {
      setIsRecording(false);
      await Voice.stop();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSpeechRecognized = (e) => {
    const { value } = e.value[0];
    setMessage(value);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    const avatarSource = isUser
      ? require("../../../assets/images/avatar.png")
      : require("../../../assets/images/avatar.png");

    return (
      <View
        style={
          isUser ? styles.userMessageContainer : styles.otherMessageContainer
        }
      >
        {!isUser && <Image source={avatarSource} style={styles.avatar} />}
        <View
          style={
            isUser ? styles.userMessageContent : styles.otherMessageContent
          }
        >
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

  const sendMessageToRecipient = (message) => {
    // Implement the logic to send the message to the recipient via MMS or any other method
    console.log("Sending message:", message);
  };

  Voice.onSpeechResults = (e) => {
    const { value } = e.value[0];
    setMessage(value);
  };

  return (
    <View style={styles.container}>
        <View style={styles.userBanner}>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate("AgentProfile")}>
              <Image source={images.avatar} style={styles.bannerAvatar} />
              </TouchableOpacity>  
            </View>
            <View>
                <Text style={styles.usrName} >User Name</Text>
              </View>
        </View>
        <ScrollView>  
          <View style={styles.chatContainer}>
            <FlatList
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.messagesContainer}
              inverted
            />
          </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        {/* <TouchableOpacity onPress={isRecording ? handleVoiceEnd : handleVoiceStart}>
          <Icon name={isRecording ? 'microphone-slash' : 'microphone'} size={24} color="black" />
        </TouchableOpacity> */}
        {isRecording ? (
          <Text style={styles.recordingText}>Recording...</Text>
        ) : (
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
          />
        )}
        <TouchableOpacity onPress={handleSend}>
          <Icon name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

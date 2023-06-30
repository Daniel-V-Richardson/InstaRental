import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  userMessageContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  otherMessageContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  userMessageContent: {
    backgroundColor: '#DCF8C6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  otherMessageContent: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },

  
})

export default styles;
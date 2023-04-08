import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, message: 'Hi there!', sender: 'mentor' },
    { id: 2, message: 'Hey! How can I help you?', sender: 'student' },
    { id: 3, message: 'I need some advice on my project', sender: 'student' },
    { id: 4, message: 'Sure, what do you need help with?', sender: 'mentor' },
    { id: 5, message: 'I am having trouble with the layout', sender: 'student' },
    { id: 6, message: 'What kind of layout are you trying to achieve?', sender: 'mentor' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[styles.messageBubble, msg.sender === 'mentor' ? styles.mentorBubble : styles.studentBubble]}>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here..."
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  studentBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  mentorBubble: {
    backgroundColor: '#3795BD',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#000000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#3795BD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Chat;

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import API_SERVER_IP from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const MentorInfo = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getMentorInfo = async () => {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.get(`http://${API_SERVER_IP}:3000/api/v1/get-mentor`, config)
    .then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
    })
    .catch((error) => {
        console.log(error)
    })
  }

  useEffect(() => {
    getMentorInfo()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Mentor Info</Text>
      </View>
      <View style={styles.content}>
      <Image style={styles.avatar} source={require('../../assets/images/menotr.jpg')} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoText}>{name}</Text>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    backgroundColor: '#3795BD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3795BD',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  chatButton: {
    backgroundColor: '#3795BD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default MentorInfo;


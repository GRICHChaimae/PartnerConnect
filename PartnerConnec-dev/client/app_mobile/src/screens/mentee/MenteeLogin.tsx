import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Input from '../../components/Input';
import API_SERVER_IP from '../../config';

const MenteeLogin = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const MenteeLogin = async () => {
    await axios
      .post(`http://${API_SERVER_IP}:3000/api/v1/mentee-login`, {
        email,
        password,
      })
      .then((response) => {
        setLoading(true)
        setEmail('');
        setPassword('');
        AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('MenteeNav');
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response) {
          console.log(error);
          Alert.alert(
            'Error',
            `${error.response.data.message}`,
            [{text: 'OK'}],
            {cancelable: false},
          );
          setLoading(false);
        } else {
          Alert.alert(
            'Error',
            'Something went wrong. Please try again later.',
            [{text: 'OK'}],
            {cancelable: false},
          );
          console.log(error)
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentee Login</Text>
      <Input value={email} placeholder="Email" onChangeText={setEmail} keyboardType="email-address"/>
      <Input value={password} placeholder="Password"  onChangeText={setPassword} keyboardType="password"/>
      <TouchableOpacity
        style={styles.button}
        onPress={MenteeLogin}
        disabled={loading}>
        {loading ? (
          <Text style={styles.buttonText}>Loading...</Text>
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3795BD',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenteeLogin;
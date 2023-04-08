import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import API_SERVER_IP from '../../config';
import axios from 'axios';

const UpdatePasswordForm = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const UpdateMenteePassword = async () => {
    if (!password || !newPassword || !confirmNewPassword) {
      Alert.alert(
        'Error',
        'Please fill all fields',
        [{text: 'OK'}],
        {cancelable: false},
      );
    }
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios
    .put(`http://${API_SERVER_IP}:3000/api/v1/mentee-account`,{
      password: password,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
    }, config)
    .then(() => {
      Alert.alert(
        'Message',
        'Mentee password updated successfully',
        [{text: 'OK'}],
        {cancelable: false},
      );
      setPassword('')
      setNewPassword('')
      setConfirmNewPassword('')
    })
    .catch(error => {
      console.log(error.response)
      Alert.alert(
        'Error',
        `${error.response.data.message}`,
        [{text: 'OK'}],
        {cancelable: false},
      );
    })
  };

  const navigation: NavigationProp<ParamListBase>  = useNavigation();

  const Logout = async () => {
    AsyncStorage.removeItem('token').then(() => {
      console.log('Token removed');
    });
      navigation.navigate('MainHome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Mentor Info</Text>
      </View>
      <View style={styles.allInputContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter current password"
            placeholderTextColor="#777"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            placeholderTextColor="#777"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            placeholderTextColor="#777"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.updateButton} onPress={UpdateMenteePassword}>
          <Text style={styles.updateButtonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutContainer} onPress={Logout}>
        <Image style={styles.icon} source={require('../../assets/images/log-out.png')} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    width: 35,
    height: 25,
    resizeMode: "contain",
  },
  header: {
    height: 50,
    backgroundColor: '#3795BD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 10,
    color: '#000',
  },
  updateButton: {
    backgroundColor: '#3795BD',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  logoutText: {
    color: '#777',
    marginLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});


export default UpdatePasswordForm;
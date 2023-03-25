import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import PartnerConnectLogo from '../components/PartnerConnectLogo ';

const HomeScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleMentorLogin = () => {
    navigation.navigate('MentorLogin');
  };

  const handleMenteeLogin = () => {
    navigation.navigate('MenteeLogin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <PartnerConnectLogo />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.mentorButton} onPress={handleMentorLogin}>
          <Text style={styles.buttonText}>Mentor Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menteeButton} onPress={handleMenteeLogin}>
          <Text style={styles.buttonText}>Mentee Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  mentorButton: {
    backgroundColor: '#2F58CD',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  menteeButton: {
    backgroundColor: '#3795BD',
    paddingHorizontal: 40,
    paddingVertical: 20,
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

export default HomeScreen;
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PartnerConnectLogo from '../../components/PartnerConnectLogo ';

const WelcomeScreen = () => {
  return (
      <LinearGradient colors={['#3795BD', '#2F58CD']} style={styles.gradient} >
        <Text style={styles.title}>Welcome to</Text>
        <PartnerConnectLogo />
        <Text style={styles.description}>
          A mentoring platform that helps you connect with experienced mentors
          to achieve your personal and professional goals.
        </Text>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  cta: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#1A73E8',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
});

export default WelcomeScreen;

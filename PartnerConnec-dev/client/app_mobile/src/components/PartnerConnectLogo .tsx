import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PartnerConnectLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.text}>Partner Connect</Text>
      </View>
      <Text style={styles.subtitle}>FOR A GOOD START</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  logo: {
    paddingTop: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    color: '#3A1078',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#4E31AA',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
  },
});

export default PartnerConnectLogo;

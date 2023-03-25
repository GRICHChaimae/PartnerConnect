import { StyleSheet, TextInput  } from 'react-native';
import React from 'react';

interface InputParam {
    value: string 
    onChangeText: (text: string) => void;
    keyboardType: string 
    placeholder: string
  }

 const Input: React.FC<InputParam> = ({value, onChangeText, keyboardType, placeholder}) => {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry
        required
    />
  )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#FFFFFF',
      width: '80%',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
  });

  export default Input
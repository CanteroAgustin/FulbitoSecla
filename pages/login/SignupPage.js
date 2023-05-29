import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { auth, db } from '../../config/firebase'

export default function SignupScreen({ navigation }) {
  const handleSubmit = () => {
    alert('Button pressed');
  };

  return (
    <View style={styles.container}>
      <FontAwesome.Button name="google" backgroundColor="#4285F4" style={{ fontFamily: "Roboto" }} onPress={handleSubmit}>
        Login with Google
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
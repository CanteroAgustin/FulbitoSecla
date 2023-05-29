import React from 'react';
import { StyleSheet, View } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { provider, auth } from '../../config/firebase'


export default function LoginPage({ navigation }) {
  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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
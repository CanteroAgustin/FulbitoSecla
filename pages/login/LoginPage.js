import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }) {
  const [accessToken, setAccesToken] = useState(null);
  const { _, setUser } = useContext(AuthenticatedUserContext);
  const [request, response, promptGoogleAsync] = Google.useAuthRequest({
    clientId: '535761942486-lip9sci1vcah62g0fpj41lv29nioqqnl.apps.googleusercontent.com',
    androidClientId: '535761942486-lip9sci1vcah62g0fpj41lv29nioqqnl.apps.googleusercontent.com'
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setAccesToken(response.authentication.accessToken);
      fetchUserInfo();
    }
  }, [response])

  async function fetchUserInfo() {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const userInfo = await response.json();
    setUser(userInfo);
  }

  const handleSubmit = () => {
    promptGoogleAsync();
  };

  return (
    <View style={styles.container}>
      <FontAwesome.Button disabled={!request} name="google" backgroundColor="#4285F4" style={{ fontFamily: "Roboto" }} onPress={handleSubmit}>
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
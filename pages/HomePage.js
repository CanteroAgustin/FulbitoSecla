import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import * as AuthSession from "expo-auth-session";
import * as Google from 'expo-auth-session/providers/google';

export default function HomeScreen() {

  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      const isRevokeSuccessful = await AuthSession.revokeAsync({ token: user.accesstoken, clientId: '535761942486-lip9sci1vcah62g0fpj41lv29nioqqnl.apps.googleusercontent.com' }, Google.discovery)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{user.uid}</Text>
      <Text>saraas</Text>
      <Button onPress={handleSignOut} title='Salir'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaf6',
  },
});
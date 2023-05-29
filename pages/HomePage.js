import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { auth } from '../config/firebase'

export default function HomeScreen() {

  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
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
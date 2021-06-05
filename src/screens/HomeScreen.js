import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome To Home: - (User Id: {user.uid} )</Text>
      <Button
        title="Logout"
        onPress={() => {
          // alert('Logout button pressed');
          logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

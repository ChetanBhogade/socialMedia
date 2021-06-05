import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <FormButton buttonTitle="Chetan" />
      {/* <Button
        title="Click Here"
        onPress={() => {
          console.log('Button Pressed.');
        }}
      /> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

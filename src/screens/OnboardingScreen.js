import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 20}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
      }}></View>
  );
};

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => {
        navigation.replace('Login');
      }}
      onDone={() => {
        navigation.replace('Login');
      }}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image source={require('../assets/images/onboarding-img1.png')} />
          ),
          title: 'Connect To The World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image source={require('../assets/images/onboarding-img2.png')} />
          ),
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind Of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image source={require('../assets/images/onboarding-img3.png')} />
          ),
          title: 'Become The Start',
          subtitle: 'Let the Spot Light Capture You',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});

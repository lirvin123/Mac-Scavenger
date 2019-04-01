import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button, ScrollView, Alert } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import Swiper from 'react-native-swiper';
import {BlurView} from 'expo';
import Styles from '../assets/styles';
import Photos from '../photos.json';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      photoPath: Photos.pathName,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false
    }
  }

  onSwipe(index) {
    if (index == 1 || index == 2) {
      if ((index == 1 && this.state.hintOneUnlocked == true) || (index == 2 && this.state.hintTwoUnlocked == true)) {
        return
      }
        if (index == 1) {
          Alert.alert(
            'Unlock',
            '+5 Minute Penalty',
            [
              {text: 'Unlock', onPress: () => this.setState({ hintOneBlur: 0, hintOneUnlocked: true })},
              {text: 'Go Back'}
            ],
            { cancelable: false }
          )
        }
        else {
          Alert.alert(
            'Unlock',
            '+7 Minute Penalty',
            [
              {text: 'Unlock', onPress: () => this.setState({ hintTwoBlur: 0, hintTwoUnlocked: true })},
              {text: 'Go Back'}
            ],
            { cancelable: false }
          )
        }
      }
    }

  render() {

    return (
      <View style={Styles.container}>
        <Swiper
            loop={false}
            onIndexChanged={(index) => this.onSwipe(index)}
            width={325}
            height={415}
            removeClippedSubviews={false}>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photoPath + 1 + '.heic' }}
              style={{ width: 325, height: 415}} />
          </View>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photoPath + 2 + '.heic' }}
              style={{ width: 325, height: 415}}
              blurRadius={this.state.hintOneBlur} />
          </View>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photoPath + 3 + '.heic' }}
              style={{ width: 325, height: 415}}
              blurRadius={this.state.hintTwoBlur} />
          </View>
        </Swiper>
        <TouchableOpacity
            style={Styles.button}
            onPress={() => this.props.navigation.navigate('Riddle')}>
          <Text style={Styles.buttonText}> Found it! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

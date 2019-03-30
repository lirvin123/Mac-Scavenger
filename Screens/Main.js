import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button, ScrollView, Alert } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import Swiper from 'react-native-swiper';
import {BlurView} from 'expo';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      photo: 'box',
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
      <View style={styles.container}>
        <Swiper loop={false} onIndexChanged={(index) => this.onSwipe(index)}>
          <View style={styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1553715269/' + this.state.photo + 1 + '.heic' }}
              style={{ width: 325, height: 415}} />
          </View>
          <View style={styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1553715269/' + this.state.photo + 2 + '.heic' }}
              style={{ width: 325, height: 415}}
              blurRadius={this.state.hintOneBlur} />
          </View>
          <View style={styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1553715269/' + this.state.photo + 3 + '.heic' }}
              style={{ width: 325, height: 415}}
              blurRadius={this.state.hintTwoBlur}/>
          </View>
        </Swiper>
        <TouchableOpacity
            style={styles.button}>
          <Text style={styles.found}> Found it! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
     backgroundColor: 'red',
     padding: 20
   },
   found: {
     color: '#fff',
     textAlign: 'center',
     fontSize: 50
   }
});

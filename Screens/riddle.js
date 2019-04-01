import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import Styles from '../assets/styles';
import Main from './main';

export default class Riddle extends React.Component {

  render() {
    return (
      <View
          style={Styles.container}>
        <Text style={Styles.title}> Solve the Puzzle! </Text>
        <Text style={Styles.riddle}> Riddle goes here: </Text>
        <TextInput
          placeholder={'Enter answer here'}>
        </TextInput>
        <TouchableOpacity
            style={Styles.button}>
          <Text style={Styles.buttonText}> Guess </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={Styles.button}
            onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={Styles.buttonText}> Back </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

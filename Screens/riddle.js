import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import styles from '../assets/styles';

export default class Riddle extends React.Component {

  render() {
    return (
      <View
          style={styles.container}>
        <Text style={styles.title}> Solve the Puzzle! </Text>
        <Text style={styles.riddle}> Riddle goes here: </Text>
        <TextInput
          placeholder={'Enter answer here'}>
        </TextInput>
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

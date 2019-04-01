import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { WebBrowser } from 'expo';
import AppNavigator from '../navigator/appNavigator';
import Styles from '../assets/styles';

export default class Home extends React.Component {

  render() {
    return (
    <View style={Styles.container}>
      <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Main')}
          style={Styles.button}>
        <Text style={Styles.buttonText}> Start </Text>
      </TouchableOpacity>
    </View>
     )
   };
 }

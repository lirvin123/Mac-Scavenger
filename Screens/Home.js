import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { WebBrowser } from 'expo';
import AppNavigator from '../navigator/appNavigator';
import styles from '../assets/styles';

export default class Home extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Main')}
          style={styles.button}>
        <Text style={styles.buttonText}> Start </Text>
      </TouchableOpacity>
    </View>
     )
   };
 }
